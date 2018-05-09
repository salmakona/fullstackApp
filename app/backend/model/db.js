var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost/exampleproject';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.createConnection();

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
require('./user');
// require('./book');
