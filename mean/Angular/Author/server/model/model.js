const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name:{type:String, required:true, minlength: [3, "Name should be at least 3 character "]},
    quote:{type:String, required:true, minlength: [3, " Quote needs to be At least 3 character "]},
    votes:{type:Number, required:false, default: 0 }

})
const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;