const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/author', {useNewUrlParser: true});
module.exports = mongoose;