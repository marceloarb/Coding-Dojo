const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quote', {useNewUrlParser: true});
module.exports = mongoose;