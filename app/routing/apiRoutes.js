//LOAD DATA
var friendsData = require("../data/friends");


//ROUTING
module.exports = function(app) {
    // Basic route that sends the user first to the AJAX Page
    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    });

    // Create New Characters - takes in JSON input
    app.post("/api/friends", function(req, res) {

      console.log(req.body);

      friendsData.push(req.body);

      res.json(friendsData);
    });

} // END EXPORTS FUNCTION
