import { io } from 'socket.io-client';

let socket = null;

export function connectSocket(userId) {
  if (socket?.connected) return socket;

  socket = io(import.meta.env.VITE_SERVER_URL, {
    auth: { userId },
  });

  return socket;
}

export function getSocket() {
  return socket;
}

export function disconnectSocket() {
  socket?.disconnect();
  socket = null;
}
