//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({

  name: String,
  email: { type: String, min: 6, max: 30, required: true },
  created: { type: Date, default: Date.now },
  age: { type: Number, min: 18, max: 65, required: true },
  password: { type: String, min:6, max: 16, required: true }

});

mongoose.model('User', userSchema);