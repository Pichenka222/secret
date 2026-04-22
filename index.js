require('dotenv').config();
const { connectDB, disconnectDB } = require('./database/config/db');
const {
  createUser,
  getUserById,
  getUserByEmail,
  updateUser,
  deleteUser,
  getAllUsers,
} = require('./database/services/user.service');

const run = async () => {
  await connectDB();

  // --- Create a user ---
  console.log('\n📝 Creating a new user...');
  const newUser = await createUser({
    username: 'john_doe',
    email: 'john.doe@example.com',
    password: 'SecurePass123!',
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1-555-0100',
    address: {
      country: 'USA',
      city: 'New York',
      street: 'Broadway',
      building: '42',
    },
  });
  console.log('✅ User created:', newUser._id);

  // --- Get user by ID ---
  console.log('\n🔍 Fetching user by ID...');
  const foundUser = await getUserById(newUser._id);
  console.log('✅ Found:', foundUser.username, '-', foundUser.email);

  // --- Get user by email ---
  console.log('\n🔍 Fetching user by email...');
  const byEmail = await getUserByEmail('john.doe@example.com');
  console.log('✅ Found:', byEmail.username);

  // --- Update user ---
  console.log('\n✏️  Updating user...');
  const updated = await updateUser(newUser._id, { firstName: 'Jonathan' });
  console.log('✅ Updated firstName:', updated.firstName);

  // --- List all users (paginated) ---
  console.log('\n📋 Getting all users (page 1)...');
  const list = await getAllUsers(1, 5);
  console.log(`✅ Total users: ${list.pagination.total}, showing: ${list.users.length}`);

  // --- Delete user ---
  console.log('\n🗑️  Deleting user...');
  await deleteUser(newUser._id);
  console.log('✅ User deleted');

  await disconnectDB();
};

run().catch((err) => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
