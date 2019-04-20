const db = require("../knexConfig.js");

module.exports = {
  addGame,
  getGames
};

async function addGame(game) {
  const newGame = await db("games").insert(game);
  const newGameValue = await db("games")
    .where("title", game.title)
    .first();
  return newGameValue;
}

function getGames() {
  return db("games");
}
