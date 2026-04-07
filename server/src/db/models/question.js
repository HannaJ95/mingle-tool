import supabase from '../../../supabase.js';

export async function getQuestionsByTopicId(topicId) {
  const { data, error } = await supabase
    .from('questions')
    .select('*, topics(name)')
    .eq('topic_id', topicId);
  return { data, error };
}

export async function getRandomQuestionByTopicId(topicId) {
  const { data, error } = await supabase
    .from('questions')
    .select('*, topics(name)')
    .eq('topic_id', topicId);
  if (error || !data || data.length === 0) return { data: null, error };
  const random = data[Math.floor(Math.random() * data.length)];
  return { data: random, error: null };
}
