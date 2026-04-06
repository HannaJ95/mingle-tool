import { createUser } from '../server/src/db/models/user.js';
import { getUserById } from '../server/src/db/models/user.js';
import { getUserByEmail } from '../server/src/db/models/user.js';

// const { data, error } = await createUser({
//   name: 'Anna Svensson',
//   email: 'johanna2@test.com',
//   role: 'student',
//   instagram: '',
//   linkedin: '',
//   website: '',
// });


// const { data, error } = await getUserById(75);


const { data, error } = await getUserByEmail("lina@test.com");



console.log('data:', data);
console.log('error:', error);
