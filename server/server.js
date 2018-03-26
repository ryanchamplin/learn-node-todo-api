var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Says to use native promises not a library for them.
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },

    completedAt: {
        type: Number,
        default: null
    }
});

// var secondTodo = new Todo({
//     text: 'Study hard',

// });


// secondTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (error) => {
//     console.log('Unable to save');
// });

var User = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        retuired: true,
        minLength: 1
    }
});


var user = new User({
    email: 'rjchamplin@olivet.edu'
});

user.save().then((doc) => {
    console.log('Saved user', doc);
}, (error) => {
    console.log('unable to save');
});
