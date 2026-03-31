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

//  Matchmaking state
let waitingPlayer = null;

// socket logic
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // matchmaking
  if (waitingPlayer) {
    console.log("Match found!");

    socket.emit("match", { opponent: waitingPlayer.id });
    waitingPlayer.emit("match", { opponent: socket.id });

    waitingPlayer = null;
  } else {
    console.log("Waiting for another player...");
    waitingPlayer = socket;
  }

   // disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);

    if (waitingPlayer === socket) {
      waitingPlayer = null;
    }
  });
});

//  Start server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});