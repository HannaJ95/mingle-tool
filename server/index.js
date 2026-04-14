import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import userRoutes from "./src/routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = 3000;

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const CLIENT_URL = "http://localhost:5173";

// Middleware
app.use(cors({ origin: CLIENT_URL }));
app.use(express.json());
app.use(userRoutes);

// HTTP server
const server = http.createServer(app);

// Socket.IO
const io = new Server(server, {
  cors: {
    origin: CLIENT_URL,
  },
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

// Matchmaking state
let queue = [];
const MIN_PLAYERS = 4;
const MAX_PLAYERS = 5;

// SOCKET LOGIC
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // 🔹 Join queue
  socket.on("joinQueue", (user) => {
    console.log("Join queue:", socket.id, user);

    socket.user = user; 

    const alreadyInQueue = queue.find((s) => s.id === socket.id);
    if (alreadyInQueue) return;

    queue.push(socket);

    console.log("Queue:", queue.map((s) => s.id));

    tryCreateGroup();
  });

  // 🔹 When user clicks "We are ready"
  socket.on("ready", () => {
    console.log("READY clicked by:", socket.id);

    const roomId = socket.roomId;

    console.log("Room:", roomId);

    if (!roomId) return;

    io.to(roomId).emit("startQuestions");
  });

  // 🔹 Disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);

    queue = queue.filter((s) => s.id !== socket.id);
  });
});

// CREATE GROUP
 async function tryCreateGroup() {
  if (queue.length < MIN_PLAYERS) return;

  const group = queue.splice(0, MAX_PLAYERS);
  const roomId = `room-${Date.now()}`;

  console.log("Creating room:", roomId);

    // 🔴 1. create group in DB
  const { data: groupData, error: groupError } = await supabase
    .from("groups")
    .insert([{}])
    .select();

  if (groupError) {
    console.error(groupError);
    return;
  }

  const dbGroup = groupData[0];

  //join socket room
  group.forEach((player) => {
    player.join(roomId);
    player.roomId = roomId; 
  });

  // 🟡 3. connect users to group
  await supabase.from("group_members").insert(
    group.map((player) => ({
      group_id: dbGroup.id,
      user_id: player.user.id,
    }))
  );

  // 🟣 4. get cards
  const { data: cards } = await supabase
    .from("cards")
    .select("*")
    .limit(3);

  // 🟢 5. connect to group
  await supabase.from("group_questions").insert(
    cards.map((card) => ({
      group_id: dbGroup.id,
      card_id: card.id,
    }))
  );

  io.to(roomId).emit("groupReady", {
    roomId,
    groupId: dbGroup.id,
    players: group.map((p) => p.user || { id: p.id }),
  });
}

// START SERVER
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});