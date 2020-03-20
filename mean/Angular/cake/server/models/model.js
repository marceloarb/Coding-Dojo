const mongoose = require('mongoose');
const RateSchema = new mongoose.Schema({
    stars:{type: Number, required: true},
    comment: {type: String, default:true, minlength: [3, "At least 3 character "]},
},{timestamps: true});
const CakeSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: [3, "At least 3 character "]},
    img: { type: String, required: true, minlength: [3, "At least 3 character "]},
    rates:[RateSchema]
}, {timestamps: true});
const model = {
    Cake : mongoose.model('Cake', CakeSchema),
    Rate : mongoose.model('Rate', RateSchema)
}
module.exports = model;