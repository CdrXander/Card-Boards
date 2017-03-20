/**
 * Created by Xander on 3/20/2017.
 */
var express     = require('express');
var session     = require('express-session');
var bodyParser  = require('body-parser');
var cors        = require('cors');

var port = 3000;

//Initialize the App    =   =   =   =   =   =   =   =
var app = module.exports = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


//DB Connection

//Import Node Controllers

//Custom Middleware

//END POINTS    =   =   =   =   =   =   =   =   =   =   =   =   =   =




//SPIN UP THE DRIVES    =   =   =   =   =   =   =   =   =   =   =   =
app.listen(port, function() {
    console.log("Server Started at", (new Date()).toTimeString(), "on port", port);
});