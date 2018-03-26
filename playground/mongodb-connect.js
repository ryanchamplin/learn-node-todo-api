//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log('Unable to connect to db', error);
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (error, result) =>{
    //     if (error){
    //         return console.log('Could not insert into document', error);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // insert new doc into Users  {name, age, location}

    // db.collection('Users').insertOne({
    //     name: 'Ryan Champlin',
    //     age: 22,
    //     location: 'Manhattan Illinois'
    // }, (error, results) => {
    //     if (error) {
    //         return console.log('Could not insert user into user document', error);
    //     }
    //     console.log(results.ops[0]._id.getTimestamp());
    // });
    client.close();
});