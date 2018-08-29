const express = require('express');
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
