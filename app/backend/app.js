
let express = require('express');
let app = express();
path = require('path'),
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


// set ejs as our templating engine =========================
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);
app.use(expressLayouts);


// set the routes ======================================

/*---ROUTES---*/
var users = require('./routes/routes');

/*---PATHS---*/
app.use('/api', users);
app.get("/", (req, res) => res.json({message: "Welcome to our Node app!"}));


app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing