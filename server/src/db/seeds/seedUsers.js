import supabase from '../../../supabase.js';
import { users } from './data/users.js';

async function seedUsers() {
  const { error } = await supabase.from('users').insert(users);

  if (error) {
    console.error('seedUsers failed:', error.message);
    return;
  }

  console.log(`Inserted users: ${users.length}`);
}

seedUsers();
