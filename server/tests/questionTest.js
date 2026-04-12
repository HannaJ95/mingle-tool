import { getQuestionsByTopicId, getRandomQuestionByTopicId } from '../src/db/models/question.js';

// const { data, error } = await getQuestionsByTopicId(24);
const { data, error } = await getRandomQuestionByTopicId(29);

console.log('data:', data);
console.log('error:', error);
