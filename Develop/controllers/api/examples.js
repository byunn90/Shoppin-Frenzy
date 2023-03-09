const express = require("express");
const router = express.Router();

// Define the route for rendering the main.handlebars file
router.get("/", (req, res) => {
  res.render("main");
});

module.exports = router;
