// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/JSON
app.use(bodyParser.json());

// Static directory
app.use(express.static(__dirname + '/app/public'));

//ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//LISTENER

// starts server
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});