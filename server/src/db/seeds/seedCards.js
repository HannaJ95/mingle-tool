import supabase from '../supabase.js';
import { cards } from './data/cards.js';

async function seedCards() {
  const { error } = await supabase.from('cards').insert(cards);

  if (error) {
    console.error('seedCards failed:', error.message);
    return;
  }

  console.log(`Inserted cards: ${cards.length}`);
}

seedCards();