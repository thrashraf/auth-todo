const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    
    todo: [],
    date: Date,
    role: String,
    isVerified: Boolean
}))

module.exports = User;