const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

var id = '5ab97b6a1dcdc025a817963e';

// if(!ObjectID.isValid(id)){
//     return console.log('ID not valid');   
// };

// Todo.find({
//     _id: id
// }).then((todos) => {
//   console.log('Todos', todos);  
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//   console.log('Todo one', todo);  
// });

User.findById(id).then((user) => {
    if(!user) {
        return console.log('User Id not found');
    }
    console.log('User id', user);  
}).catch((e) => console.log(e));