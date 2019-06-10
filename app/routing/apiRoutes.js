var friends = require("../data/friends");

module.exports = function(app) {

  // Return all friends json
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);

    // Receive user details (name, photo, scores)
    var user = req.body;

    // Parse user score arreay
    for (var index = 0; index < user.scores.length; index++) {
        user.scores[index] = parseInt(user.scores[index]);
    }

    var lowestScore = 100;
    var bestScore = 0;

    for (var i = 0; i < friends.length; i++) {

        var Difference = 0;

        for (var j = 0; j < friends[i].scores.length; j++) {
            Difference += Math.abs(user.scores[j] - friends[i].scores[j]);
        }

        if(Difference < lowestScore){
            bestScore = i;
            lowestScore = Difference;
        }
    }

    friends.push(user);
    res.json(friends[bestScore]);

  });
};