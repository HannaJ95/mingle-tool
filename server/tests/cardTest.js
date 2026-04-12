import { getAvailableCards, getRandomAvailableCard, markCardUnavailable, markCardAvailable } from '../src/db/models/card.js';

// const { data, error } = await getAvailableCards();
const { data, error } = await getRandomAvailableCard();
// const { data, error } = await markCardUnavailable();
// const { data, error } = await markCardAvailable();

console.log('data:', data);
console.log('error:', error);
