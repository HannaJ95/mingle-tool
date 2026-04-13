import { createUser, getUserById, getUserByEmail, getUsersByRole } from '../src/db/models/user.js';

// const { data, error } = await upsertUser({
//   firstname: 'Lina',
//   lastname: 'Svensson',
//   email: 'LinaS@test.com',
//   role: 'student',
//   instagram: '',
//   linkedin: '',
//   website: '',
// });


// const { data, error } = await getUserById(75);


// const { data, error } = await getUserByEmail("lina@test.com");
const { data, error } = await getUsersByRole("company");



console.log('data:', data);
console.log('error:', error);
