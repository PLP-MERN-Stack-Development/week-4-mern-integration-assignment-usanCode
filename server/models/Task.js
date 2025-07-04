
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    completed: { type: Boolean, default: false},
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true }, // Reference to User model
    
    });

    module.exports = mongoose.model('Task', taskSchema);
// This code defines a Mongoose schema for a Task model with fields for title, description, completed status, and an owner reference to the User model.
// The 'owner' field is a reference to the User model, allowing you to associate tasks with specific users.
// The 'completed' field is a boolean that defaults to false, indicating whether the task is