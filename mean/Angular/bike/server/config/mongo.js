const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user', {useNewUrlParser: true});
module.exports = mongoose;