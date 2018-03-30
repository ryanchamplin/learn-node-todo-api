var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Says to use native promises not a library for them.
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};