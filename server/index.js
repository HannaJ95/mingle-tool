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
let studentQueue = [];
let companyQueue = [];
const MIN_PLAYERS = 4;
const MAX_PLAYERS = 5;

// SOCKET LOGIC
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  //  Join queue
  socket.on("joinQueue", (user) => {
    const userWithSocket = {
      ...user,
      socketId: socket.id,
    };

    console.log("User joined:", userWithSocket);

    if (userWithSocket.role === "student") {
      studentQueue.push(userWithSocket);
    } else if (userWithSocket.role === "company") {
      companyQueue.push(userWithSocket);
    } else {
      console.log("Invalid role:", userWithSocket);
    }
  });

  //  When user clicks "We are ready"
  socket.on("ready", () => {
    console.log("READY clicked by:", socket.id);

    const roomId = socket.roomId;

    console.log("Room:", roomId);

    if (!roomId) return;

    io.to(roomId).emit("startQuestions");
  });

  //  Disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// START SERVER
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});