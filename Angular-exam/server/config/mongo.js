const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movie', {useNewUrlParser: true});
module.exports = mongoose;