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

      // object to update each new friend match
      var friendMatch = {
        name: "",
        photo: "",
        friendDifference: Infinity
      };

      // take result of user response/parse with body-parser
      var userData = req.body;
      var userScores = userData.scores;
      console.log("userScores", userScores);

      // calculate difference between user score/database score
      var scoreDifference;

      // loop for friends in database
      for (var i = 0; i < friendsData.length; i++) {

        var friend = friendsData[i];
        scoreDifference = 0;

        //loop for scores in database
        console.log("friend", friend);
        for (var j = 0; j < friend.scores.length; j++) {
          var friendScore = friend.scores[j];
          var userScore = userScores[j];

          // difference between scores
          scoreDifference += Math.abs(parseInt(userScore) - parseInt(friendScore));
        }

        if (scoreDifference <= friendMatch.friendDifference) {
          //set match to new friend
          friendMatch.name = friend.name;
          friendMatch.photo = friend.photo;
          friendMatch.friendDifference = scoreDifference;
        }

      }

      friendsData.push(userData)

      return res.json(friendMatch);
    });

} // END EXPORTS FUNCTION
