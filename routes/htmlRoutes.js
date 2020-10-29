// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/homepage");
    }
    res.sendFile(path.join(__dirname, "../src/pages/userLogin/signup.js"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/memberscloset");
    }
    res.sendFile(path.join(__dirname, "../src/pages/userLogin/login.js"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/memberscloset", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../src/pages/membersCloset/membersCloset.js"));
  });
};
