const express = require("express");
const db = require("../data/models/gamesModel.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const games = await db.getGames();
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {});

module.exports = router;
