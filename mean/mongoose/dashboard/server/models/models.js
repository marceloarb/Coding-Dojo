const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3},
    age: { type: Number, min: 1, max: 10},
    url: { type: String, required: true}
}, {timestamps: true});
const User = mongoose.model('User', UserSchema);
module.exports = User;