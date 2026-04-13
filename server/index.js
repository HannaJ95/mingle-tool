import express from 'express';
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
// import userRoutes from "./routes/userRoutes.js";

// make an express app
const app = express();

const PORT = process.env.PORT || 3000;
// const PORT = 3000;

const CLIENT_URL = ["http://localhost:5173", "http://localhost:5174"];

//  Middleware
app.use(cors({
  origin: CLIENT_URL,
  credentials: true
}));

app.use(express.json());

//  HTTP server 
const server = http.createServer(app);

// Socket.IO
const io = new Server(server, {
  cors: {
    origin: CLIENT_URL,
    methods: ["GET", "POST"],
    credentials: true
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

  socket.on("ready", () => {
  console.log("READY clicked by:", socket.id);

  const roomId = [...socket.rooms][1]; 

  console.log("Room:", roomId);

  io.to(roomId).emit("startQuestions");
});

  socket.on("joinQueue", (user) => {
    console.log("Join queue:", socket.id, user);

    socket.user = user; 

    // Avoid duplicates in queue
    const alreadyInQueue = queue.find(s => s.id === socket.id);
    if (alreadyInQueue) return;

    queue.push(socket);

    console.log("Queue:", queue.map(s => s.id));

    tryCreateGroup();
  });

  socket.on("disconnect", (reason) => {
    console.log("User disconnected:", socket.id, "| Reason:", reason);

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
    players: group.map(p => p.user),
  });
}

//  Start server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


// app.use(cors());
// app.use(express.json());
// app.use(userRoutes);

// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`);
// });

