var path = require("path");

module.exports = function (app) {
    // if user enters survey in URL or presses survey button, serves the survey HTML file
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // Basic route that sends the user first to the AJAX Page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};
