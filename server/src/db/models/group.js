import supabase from '../../../supabase.js';

export async function createGroup(cardId) {
  const { data, error } = await supabase
    .from('groups')
    .insert({ card_id: cardId })
    .select()
    .single();
  return { data, error };
}

export async function getGroupById(id) {
  const { data, error } = await supabase
    .from('groups')
    .select('*')
    .eq('id', id)
    .single();
  return { data, error };
}

export async function updateGroupStatus(groupId, status) {
  const { data, error } = await supabase
    .from('groups')
    .update({ status })
    .eq('id', groupId);
  return { data, error };
}