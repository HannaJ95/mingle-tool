import { getAvailableCards } from '../server/src/db/models/card.js'
import { getRandomAvailableCard } from '../server/src/db/models/card.js'
import { markCardUnavailable } from '../server/src/db/models/card.js'
import { markCardAvailable } from '../server/src/db/models/card.js'

const { data, error } = await getAvailableCards();
// const { data, error } = await getRandomAvailableCard();
// const { data, error } = await markCardUnavailable();
// const { data, error } = await markCardAvailable();
console.log("data:", data);
console.log("error:", error);
