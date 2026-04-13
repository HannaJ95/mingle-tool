import { insertGroupQuestion } from '../db/models/groupQuestions.js';
import { getRandomQuestions } from './questionController.js';

export async function assignQuestionsToGroup(groupId, count = 3) {
  const { data: questions, error } = await getRandomQuestions(count);
  if (error || !questions) return { data: null, error };

  const results = [];
  for (const question of questions) {
    const { data, error } = await insertGroupQuestion(groupId, question.id);
    if (error) return { data: null, error };
    results.push(data);
  }

  return { data: results, error: null };
}
