//server.js
//
//modules ====================================
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');

// configuration ============================


//config files =============================
var db = require('./config/db');

//set the port ===========================
var port = process.env.PORT || 3000;

//connect to mongoDB database
// mongoose.connect(db.url)

//get all data on the post parameters
//parse application/json
app.use(bodyParser.json());

//parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//parse aplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:true}));

//override eith X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// configure routes
require('./app/routes')(app);

//start app ===========================
app.listen(port);

console.log("all the magic in port: "+port);

exports = module.exports = app;







