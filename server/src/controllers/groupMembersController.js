import { getGroupMembersByGroupId } from '../db/models/groupMembers.js';

export async function getGroupMembers(groupId) {
  const { data, error } = await getGroupMembersByGroupId(groupId);
  if (error || !data) return { data: null, error };
  return { data: data.map((m) => m.users), error: null };
}
