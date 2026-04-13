import { getQuestions, getQuestionsByTopicId } from '../db/models/question.js';

export async function getRandomQuestions(count = 3) {
  const { data, error } = await getQuestions();
  if (error || !data || data.length === 0) return { data: null, error };

  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }

  return { data: data.slice(0, count), error: null };
}

export async function getRandomQuestionByTopicId(topicId) {
  const { data, error } = await getQuestionsByTopicId(topicId);
  if (error || !data || data.length === 0) return { data: null, error };

  const random = data[Math.floor(Math.random() * data.length)];
  return { data: random, error: null };
}
