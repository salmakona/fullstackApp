
let express = require('express');
let app = express();
let mongoose = require('mongoose');
let morgan = require('morgan');
let bodyParser = require('body-parser');
require('./model/db');

let port = 8080;

//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  


// set the routes ======================================
app.use(require('./routes/routes'))

app.get("/", (req, res) => res.json({message: "Welcome to our Bookstore!"}));


app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing