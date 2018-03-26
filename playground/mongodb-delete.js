//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log('Unable to connect to db', error);
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Do cool stuff'}).then((result) => {
    //     console.log(result);
    // });
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Do cool stuff'}).then((result) => {
    //     console.log(result);
    // });
    // findONeAndDelete
    db.collection('Users').deleteMany({
        name: 'Ryan Champlin'
    }).then((result) => {
        console.log(result);
    })
    //client.close();
});