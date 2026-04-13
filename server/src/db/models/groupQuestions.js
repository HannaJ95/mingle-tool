import supabase from '../../../supabase.js';

export async function insertGroupQuestion(groupId, questionId) {
  const { data, error } = await supabase
    .from('group_questions')
    .insert({ group_id: groupId, question_id: questionId })
    .select();
  return { data, error };
}

export async function getQuestionsByGroupId(groupId) {
  const { data, error } = await supabase
    .from('group_questions')
    .select('*, questions(*, topics(name))')
    .eq('group_id', groupId);
  return { data, error };
}

export async function deleteGroupQuestions(groupId) {
  const { data, error } = await supabase
    .from('group_questions')
    .delete()
    .eq('group_id', groupId);
  return { data, error };
}

