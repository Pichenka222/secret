const User = require('../models/user.model');

/**
 * Creates a new user in the database.
 * @param {Object} userData - User data object
 * @returns {Promise<Object>} Created user document
 */
const createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user.toObject();
};

/**
 * Retrieves a user by their MongoDB ObjectId.
 * @param {string} userId - MongoDB ObjectId string
 * @returns {Promise<Object|null>} User document or null
 */
const getUserById = async (userId) => {
  return User.findById(userId).lean();
};

/**
 * Retrieves a user by their email address.
 * @param {string} email - User email address
 * @returns {Promise<Object|null>} User document or null
 */
const getUserByEmail = async (email) => {
  return User.findOne({ email: email.toLowerCase() }).lean();
};

/**
 * Retrieves a user by their username.
 * @param {string} username - Username string
 * @returns {Promise<Object|null>} User document or null
 */
const getUserByUsername = async (username) => {
  return User.findOne({ username }).lean();
};

/**
 * Updates a user by their MongoDB ObjectId.
 * @param {string} userId - MongoDB ObjectId string
 * @param {Object} updateData - Fields to update
 * @returns {Promise<Object|null>} Updated user document or null
 */
const updateUser = async (userId, updateData) => {
  return User.findByIdAndUpdate(userId, updateData, {
    new: true,
    runValidators: true,
  }).lean();
};

/**
 * Deletes a user by their MongoDB ObjectId.
 * @param {string} userId - MongoDB ObjectId string
 * @returns {Promise<Object|null>} Deleted user document or null
 */
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId).lean();
};

/**
 * Returns a paginated list of all users.
 * @param {number} [page=1] - Page number (1-based)
 * @param {number} [limit=10] - Number of users per page
 * @param {Object} [filter={}] - Optional filter criteria
 * @returns {Promise<Object>} Object with users array and pagination metadata
 */
const getAllUsers = async (page = 1, limit = 10, filter = {}) => {
  const skip = (page - 1) * limit;
  const [users, total] = await Promise.all([
    User.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    User.countDocuments(filter),
  ]);
  return {
    users,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasNextPage: page < Math.ceil(total / limit),
      hasPrevPage: page > 1,
    },
  };
};

/**
 * Searches users by name, username or email (case-insensitive).
 * @param {string} query - Search string
 * @param {number} [limit=10] - Maximum number of results
 * @returns {Promise<Object[]>} Array of matching user documents
 */
const searchUsers = async (query, limit = 10) => {
  const regex = new RegExp(query, 'i');
  return User.find({
    $or: [
      { username: regex },
      { email: regex },
      { firstName: regex },
      { lastName: regex },
    ],
  })
    .limit(limit)
    .lean();
};

/**
 * Updates the lastLogin timestamp of a user to now.
 * @param {string} userId - MongoDB ObjectId string
 * @returns {Promise<Object|null>} Updated user document or null
 */
const updateLastLogin = async (userId) => {
  return User.findByIdAndUpdate(userId, { lastLogin: new Date() }, { new: true }).lean();
};

module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
  getUserByUsername,
  updateUser,
  deleteUser,
  getAllUsers,
  searchUsers,
  updateLastLogin,
};
