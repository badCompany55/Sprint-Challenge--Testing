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

router.post("/", async (req, res) => {
  const { title, genre } = req.body;
  if (title && genre) {
    try {
      const newGame = await db.addGame(req.body);
      res.status(201).json(newGame);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(422).json({ Error: "The Title and Genre are required" });
  }
});

module.exports = router;
