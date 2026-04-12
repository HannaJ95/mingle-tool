import { upsertUser, getUserById, getUserByEmail, getUsersByRole } from '../src/db/models/user.js';

// const { data, error } = await upsertUser({
//   name: 'Lina Svensson',
//   email: 'LinaS@test.com',
//   role: 'student',
//   instagram: '',
//   linkedin: 'linaLinkedin',
//   website: '',
// });


// const { data, error } = await getUserById(75);


const { data, error } = await getUserByEmail("LinaS@test.com");
// const { data, error } = await getUsersByRole("company");



console.log('data:', data);
console.log('error:', error);
