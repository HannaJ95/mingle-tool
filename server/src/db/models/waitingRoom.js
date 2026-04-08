import supabase from '../../../supabase.js';

export async function addToWaitingRoom(userId, socketId) {
  const { data, error } = await supabase
    .from('waiting_room')
    .insert({ user_id: userId, socket_id: socketId })
    .select()
    .single();
  return { data, error };
}

export async function getWaitingRoom() {
  const { data, error } = await supabase
    .from('waiting_room')
    .select('*, users(*)');
  return { data, error };
}

export async function removeFromWaitingRoom(userId) {
  const { data, error } = await supabase
    .from('waiting_room')
    .delete()
    .eq('user_id', userId);
  return { data, error };
}
