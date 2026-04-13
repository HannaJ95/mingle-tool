import supabase from '../../../supabase.js';

export async function insertGroupMember(groupId, userId) {
  const { data, error } = await supabase
    .from('group_members')
    .insert({ group_id: groupId, user_id: userId })
    .select()
    .single();
  return { data, error };
}

export async function getGroupMembersByGroupId(groupId) {
  const { data, error } = await supabase
    .from('group_members')
    .select('*, users(*)')
    .eq('group_id', groupId);
  return { data, error };
}

export async function setGroupMemberReady(groupId, userId) {
  const { data, error } = await supabase
    .from('group_members')
    .update({ is_ready: true })
    .eq('group_id', groupId)
    .eq('user_id', userId);
  return { data, error };
}
