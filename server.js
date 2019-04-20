const express = require("express");
const helm = require("helmet");
const morg = require("morgan");
const gamesRouter = require("./routes/gamesRouter.js");

const server = express();

server.use(helm(), express.json(), morg("dev"));
server.use("/api/games", gamesRouter);

server.get("/", (req, res) => {
  res.send("Home Test");
});

module.exports = server;
