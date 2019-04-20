const express = require("express");
const db = require("../data/models/gamesModel.js");

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("testing");
});

module.exports = router;
