/*const express = require('express');
const app = express();

// ------------------------------------------------
// Set up Object-Document mapping
// i.e., declare the schema of collections in the db
// ------------------------------------------------
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

const User = mongoose.model('User', {
    name: {type: String, index: true},  // Use an index on name for faster querying
    gender: String,
    email: String,
    age: Number,
    location: [String],
});

// ------------------------------------------------
// Create sample data
// ------------------------------------------------
User  //For register
    .remove({}) // Remove existing people
    .then(() => {
        new User({name: 'Alice', gender: 'female',age: 34, emailAddress: '309156400@gmail.com',location: ['Sydney', 'New South Wales']}).save();
        new User({name: 'Bob', gender: 'male', age: 23, emailAddress: '309121200@gmail.com', location: ['Bondi', 'New South Wales']}).save();
        new User({name: 'Carol', gender: 'female',age: 41, emailAddress: '209356400@gmail.com', location: ['Brisbane', 'Queensland']}).save();
        new User({name: 'Dave', gender: 'male',  age: 30, emailAddress: '2123210@gmail.com', location: ['Cairns', 'Queensland']}).save();
    });

// ------------------------------------------------
// GET / people:
// Retrieve a list of all people in the database
//
// Note: this code does not catch database errors
// ------------------------------------------------
app.use('/people', (req, res) => {
    User
        .find()
        .then(results => res.json(results));
});

// ------------------------------------------------
// GET /find?name=<Name>
// Retrieve full details of all records matching the supplied name
//
// Note: this code does not catch database errors
// ------------------------------------------------
app.use('/find', (req, res) => {
    User
        .find({name: req.query.name})
        .then(results => res.json(results));
});

// ------------------------------------------------
// Start serving
// ------------------------------------------------
server = app.listen(3000, () => {
    console.log('Running on http://localhost:3000/');
});
*/
const express = require('express');
const router = express.Router();
const app = express();

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

// ------------------------------------------------
// Connect to MongoDB
// ------------------------------------------------
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  const db = client.db('demo');

  // ------------------------------------------------
  // Create sample data
  // ------------------------------------------------
  db.collection('people')
    .insertOne({})          // Create one to ensure that .drop() won't fail
    .then(() => db.collection('people').drop()) // Remove existing people
    .then(() => {
      db.collection('people').createIndex('name');
      db.collection('people').insertOne({name: 'Alice', age: 34, location: ['Sydney', 'New South Wales']});
      db.collection('people').insertOne({name: 'Bob', age: 23, location: ['Bondi', 'New South Wales']});
      db.collection('people').insertOne({name: 'Carol', age: 41, location: ['Brisbane', 'Queensland']});
      db.collection('people').insertOne({name: 'Dave', age: 30, location: ['Cairns', 'Queensland']});

    });

  // ------------------------------------------------
  //Add header to prevent cross site
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  // GET / people:
  // Retrieve a list of all people in the database
  //
  // Note: this code does not catch database errors
  // ------------------------------------------------
  //Register
  router.post('/register',function (req,res,next) {
    var register = req.body;
    //db.collection('people').insertOne({name: register.user_name},{password: register.password})
    console.log(register);
  })

  app.use('/people', (req, res) => {
    db.collection('people')
      .find()
      .toArray()
      .then(docs => res.json(docs));
  });


  // ------------------------------------------------
  // GET /find?name=<Name>
  // Retrieve full details of all records matching the supplied name
  //
  // Note: this code does not catch database errors
  // ------------------------------------------------
  app.use('/find', (req, res,) => {
    db.collection('people')
      .find({name: req.query.user_name})
      .toArray()
      .then(docs => res.json(docs));
  });

  // ------------------------------------------------
  // Start serving
  // ------------------------------------------------
  app.listen(3004, () => {
    console.log('Running on http://localhost:3004/');
  });
});
