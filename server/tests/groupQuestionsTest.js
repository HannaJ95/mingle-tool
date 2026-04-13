import { assignQuestionsToGroup } from '../src/controllers/groupQuestionsController.js';

const { data, error } = await assignQuestionsToGroup(2);

console.log('data:', data);
console.log('error:', error);
