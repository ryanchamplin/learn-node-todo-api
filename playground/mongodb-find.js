//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log('Unable to connect to db', error);
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5ab7e490f308bcf5282b6066')
    // }).toArray().then((docs) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (error) => {
    //     console.log('Unable to fetch Todos', error);
    // });

    // db.collection('Todos').find().count().then((count) =>{
    //     console.log('Todos count', count);
    // }, (error) => {
    //     console.log('Unable to fetch Todos', error);
    // });

    db.collection('Users').find({name: 'Ryan Champlin'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (error) =>{
        console.log('Could not find that');
    })
    //client.close();
});