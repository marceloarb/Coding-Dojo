const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name:{type:String, required:true, minlength: [3, "At least 3 character "]},
    quote:{type:String, required:true, minlength: [3, "At least 3 character "]},
    votes:{type:Number, required:false,}

})
const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;