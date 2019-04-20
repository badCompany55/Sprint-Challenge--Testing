const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Games Page");
});

module.exports = router;
