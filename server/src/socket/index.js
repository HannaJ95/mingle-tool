import { Server } from 'socket.io';
import { registerWaitingRoomHandlers } from './handlers/waitingRoomHandler.js';

export function createSocketServer(httpServer, corsOptions) {
  const io = new Server(httpServer, {
    cors: corsOptions,
  });

  io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);
    registerWaitingRoomHandlers(io, socket);
  });

  return io;
}
