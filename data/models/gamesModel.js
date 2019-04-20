const db = require("../knexConfig.js");

module.exports = {
  addGame,
  getGames
};

function addGame(game) {
  return db("games").insert(game);
}

function getGames() {
  return db("games");
}
