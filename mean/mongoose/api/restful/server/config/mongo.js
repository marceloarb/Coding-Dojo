const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/task', {useNewUrlParser: true});
module.exports = mongoose;