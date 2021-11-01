const mongoose = require('mongoose');
  
// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/geeksforgeeks', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
  
// User model
const User = mongoose.model('User', {
    name: { type: String },
    age: { type: Number }
});
  
// Only one parameter [query/condition]
// Find all documents that matches the
// condition name='Punit'
User.find({ name: 'Punit'}, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("First function call : ", docs);
    }
});
  
// Only Two parameters [condition, query projection]
// Here age:0 means don't include age field in result 
User.find({ name: 'Punit'}, {age:0}, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("Second function call : ", docs);
    }
});
  
// All three parameter [condition, query projection,
// general query options]
// Fetch first two records whose age >= 10 
// Second parameter is null i.e. no projections
// Third parameter is limit:2 i.e. fetch
// only first 2 records
User.find({ age: {$gte:10}}, null, {limit:2}, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("Third function call : ", docs);
    }
});