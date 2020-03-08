//CRUD create read update delete
// /Users/athar/mongodb/bin/mongod.exe --dbpath=/Users/athar/mongodb-data
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'ticketplease'

// const id = new ObjectID()

// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL,{ useNewUrlParser: true , useUnifiedTopology: true}, (error, client)=>{
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
//Create Database.
    // db.collection('users').insertOne({
    //     // _id: id,
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 21
    //     },{
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Hi this is a description about first thing',
    //         completed: true
    //     },

    //     {
    //         description: 'Hi this is a description about second thing',
    //         completed: false
    //     },

    //     {
    //         description: 'Hi this is a description about third thing',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if(error){
    //         console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })
// Read methods

    // db.collection('users').findOne({ _id: new ObjectID("5dfb2507f0472b553c397ea7")}, (error, user) =>{
    //     if(error){
    //         return console.log('Unable to fetch the document!')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 20 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 20 }).count((error, count) => {
    //     console.log(count)
    // })

    //update.
//    db.collection('users').updateOne({
//         _id: new ObjectID("5e0191d82c11e732083f0634")
//     },{
//         $inc: {
//             age: 1
//         }
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result)=>{
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    //delete 
    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result)=>{
    //      console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        _id: new ObjectID('5e0191eb22cb1425b42351f5')
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})