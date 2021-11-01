const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/geeksforgeeks', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
  
const User = mongoose.model('User', {
    name: { type: String },
    age: { type: Number }
});

User.find({ name: 'Punit'}, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("First function call : ", docs);
    }
});
  
User.find({ name: 'Punit'}, {age:0}, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("Second function call : ", docs);
    }
});
  
User.find({ age: {$gte:10}}, null, {limit:2}, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("Third function call : ", docs);
    }
});