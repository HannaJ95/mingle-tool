import { getAvailableCards } from '../db/models/card.js';

export async function getRandomAvailableCard() {
  const { data, error } = await getAvailableCards();
  if (error || !data) return { data: null, error };

  const random = data[Math.floor(Math.random() * data.length)];
  return { data: random, error: null };
}
