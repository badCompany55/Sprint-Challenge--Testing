const db = require("../knexConfig.js");

module.exports = {
  addGame
};

function addGame(game) {
  return db("games").insert(game);
}
