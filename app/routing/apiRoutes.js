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

      for (var i = 0; friendsData.length; i++) {

        console.log(req.body);

        friendsData.push(req.body);

      }

      return res.json(friendsData);
    });

} // END EXPORTS FUNCTION
