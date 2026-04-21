import {
  addToWaitingRoom,
  getWaitingRoom,
  removeFromWaitingRoom,
  removeFromWaitingRoomBySocketId,
} from '../../db/models/waitingRoom.js';
import { createMatch } from '../../services/matchService.js';

// RULE FOR CREATING GROUP
const GROUP_COMPOSITION = { students: 3, companies: 1 };

export function registerWaitingRoomHandlers(io, socket) {

  // ADD USER TO DB-WAITING_ROOM 
  socket.on('join_waiting_room', async (userId) => {
    const { error: addError } = await addToWaitingRoom(userId, socket.id);
    if (addError) {
      socket.emit('waiting_room_error', { message: 'Failed to join waiting room' });
      return;
    }

    // GET USERS FROM WAITINGROOM
    const { data: waitingUsers } = await getWaitingRoom();
    if (!waitingUsers) return;

    const students = waitingUsers.filter((u) => u.users?.role === 'student');
    const companies = waitingUsers.filter((u) => u.users?.role === 'company');

    // CHECK IF ENOUGH USERS TO FORM A GROUP
    const hasEnough =
      students.length >= GROUP_COMPOSITION.students &&
      companies.length >= GROUP_COMPOSITION.companies;

    if (!hasEnough) return;

    // SELECT FIRST 3 STUDENTS AND FIRST COMPANY FROM QUEUE
    const selected = [
      ...students.slice(0, GROUP_COMPOSITION.students),
      ...companies.slice(0, GROUP_COMPOSITION.companies),
    ];

    const userIds = selected.map((u) => u.user_id);

    // USE createMatch() FROM SERVICES TO GET MATCH-DATA
    const { data: matchData, error: matchError } = await createMatch(userIds);
    if (matchError || !matchData) {
      socket.emit('waiting_room_error', { message: 'Failed to create match' });
      return;
    }

    // REMOVE MATCHED USERS FROM WAITING-ROOM 
    await Promise.all(selected.map((u) => removeFromWaitingRoom(u.user_id)));


    // NOTIFY MATCHED USERS VIA SOCKET
    for (const { socket_id } of selected) {
      io.to(socket_id).emit('match_found', matchData);
    }
  });

  // REMOVE FROM WAITING ROOM IF CONNECTION IS LOST
  socket.on('disconnect', async () => {
    await removeFromWaitingRoomBySocketId(socket.id);
  });
}
