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
    for (let index = 0; index < user.scores.length; index++) {
        user.scores[index] = parseInt(user.scores[index]);
    }

    var lowestDifference = 100;
    var bestMatchIndex = 0;

    for (let i = 0; i < friends.length; i++) {

        var currentDifference = 0;

        for (let j = 0; j < friends[i].scores.length; j++) {
            currentDifference += Math.abs(user.scores[j] - friends[i].scores[j]);
        }

        if(currentDifference < lowestDifference){
            bestMatchIndex = i;
            lowestDifference = currentDifference;
        }
    }

    friends.push(user);
    res.json(friends[bestMatchIndex]);

  });
};