const mongoose = require('mongoose');
const BikeSchema = new mongoose.Schema({
    price:{type:Number},
    Address:{type:String},
})
const UserSchema = new mongoose.Schema({
    name:{type:String, required: true, minlength:[2, "Should be at least 2 character"]},
    password:{type:String, required:true, minlength: [3, "At least 3 character "]},
    email:{type:String, required:true, minlength: [3, "At least 3 character "]},
    bikes:[BikeSchema]
})
const schema = {
    User:mongoose.model('User', UserSchema),
    Bike: mongoose.model('Bike', BikeSchema)
    }
module.exports = schema ;