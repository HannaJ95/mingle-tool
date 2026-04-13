import supabase from '../../../supabase.js';

export async function getQuestionsByTopicId(topicId) {
  const { data, error } = await supabase
    .from('questions')
    .select('*, topics(name)')
    .eq('topic_id', topicId);
  return { data, error };
}

export async function getQuestions() {
  const { data, error } = await supabase
    .from('questions')
    .select('*, topics(name)');
  return { data, error };
}
