const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/about", (req, res) => {
  res.render(path.join(__dirname, "../views/about.ejs"));
});

module.exports = router;
