const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: [3, " Name should be At least 3 character "]},
    stars:{type: Number, required: true,minlength:[1,"Must give a rate"]},
    review:{type:String, required:true, minlength: [3, "Review should be At least 3 character "]},
    

},{timestamps: true})

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: [3, "Title should be At least 3 character "]},
    name: { type: String, required: true, minlength: [3, " Name should be At least 3 character "]},
    stars:{type: Number, required: true,minlength:[1,"Must give a rate"]},
    review:{type:String, required:true, minlength: [3, "Review should be At least 3 character "]},
    
    reviews:[ReviewSchema]
}, {timestamps: true});
const model = {
    Movie : mongoose.model('Movie', MovieSchema),
    Review : mongoose.model('Rate', ReviewSchema)
}
module.exports = model;