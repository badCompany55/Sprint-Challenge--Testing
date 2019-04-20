const games = require("../data/models/gamesModel.js");
const db = require("../data/knexConfig.js");

const testGame = {
  title: "Pacman",
  genre: "Aracde",
  releaseYear: 1980
};

describe("games model", () => {
  beforeEach(() => {
    return db("games").truncate();
  });

  describe("add game method", () => {
    it("should insert a game", async () => {
      await games.addGame(testGame);

      const insertObject = await db("games").first();
      expect(insertObject.length).toBe(1);
      expect(insertObject).toHaveProperty("title", "Pacman");
      expect(insertObject).toHaveProperty("genre", "Aracde");
      expect(insertObject).toHaveProperty("title", 1980);
    });
  });
});
