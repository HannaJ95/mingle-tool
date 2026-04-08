import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

// make an express app
const app = express();
const PORT = 3000;

const CLIENT_URL = "http://localhost:5173"

//  Middleware
app.use(cors({
  origin: CLIENT_URL
}));

app.use(express.json());

//  HTTP server 
const server = http.createServer(app);

// Socket.IO
const io = new Server(server, {
  cors: {
    origin: CLIENT_URL
  }
});

app.get("/", (req, res) => {
  res.send("Server is running ");
});

//matchmaking state
let queue = [];
const MIN_PLAYERS = 4;
const MAX_PLAYERS = 5;

//socket logic
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("joinQueue", () => {
    console.log("Join queue:", socket.id);

    // Avoid duplicates in queue
    const alreadyInQueue = queue.find(s => s.id === socket.id);
    if (alreadyInQueue) return;

    queue.push(socket);

    console.log("Queue:", queue.map(s => s.id));

    tryCreateGroup();
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);

    queue = queue.filter(s => s.id !== socket.id);
  });
});
  
  function tryCreateGroup() {
  if (queue.length < MIN_PLAYERS) return;

  const group = queue.splice(0, MAX_PLAYERS);

  const roomId = `room-${Date.now()}`;

  console.log("Creating room:", roomId);

  group.forEach((player) => {
    player.join(roomId);
  });

  io.to(roomId).emit("groupReady", {
    roomId,
    players: group.map(p => p.id),
  });
}

//  Start server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});