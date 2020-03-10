const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
require('dotenv/config');


app.use(bodyParser.json());
//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// const uri = `${process.env.DB_CONNECTION}`;
// const client = new MongoClient(uri, { useUnifiedTopology: true }, { useNewUrlParser: true });

mongoose.connect(process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to database!")
);




app.get('/',(req,res) => {
res.send('blabla');
});

app.get('/posts',(req,res) => {
    res.send('blabldda');
    });



// mongoose.connect(process.env.DB_CONNECTION,
// //  { useUnifiedTopology: true },
//  { useNewUrlParser: true }, () => {
//     console.log('connected to DB!')
// })






// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     console.log('connected to DB !')
//     client.close();
//   });




app.listen(3000);
