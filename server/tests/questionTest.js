import { getQuestionsByTopicId, getQuestions } from '../src/db/models/question.js';
import { getRandomQuestionByTopicId, getRandomQuestions } from '../src/controllers/questionController.js';

// const { data, error } = await getQuestionsByTopicId(24);
// const { data, error } = await getRandomQuestionByTopicId(29);
// const { data, error } = await getQuestions();
const { data, error } = await getRandomQuestions();

console.log('data:', data);
console.log('error:', error);
