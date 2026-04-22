# 📂 Database Module

This directory contains the MongoDB database layer for the Secret User Management System.

## Structure

```
database/
├── config/
│   └── db.js           # MongoDB connection setup
├── models/
│   └── user.model.js   # Mongoose User schema & model
├── services/
│   └── user.service.js # CRUD service functions
└── README.md
```

## Quick Reference

| Function | Description |
|----------|-------------|
| `connectDB()` | Connect to MongoDB |
| `disconnectDB()` | Gracefully disconnect |
| `createUser(data)` | Create a new user |
| `getUserById(id)` | Find user by ObjectId |
| `getUserByEmail(email)` | Find user by email |
| `getUserByUsername(name)` | Find user by username |
| `updateUser(id, data)` | Update user fields |
| `deleteUser(id)` | Delete a user |
| `getAllUsers(page, limit)` | Paginated user list |
| `searchUsers(query)` | Full-text search |
| `updateLastLogin(id)` | Update last login time |
