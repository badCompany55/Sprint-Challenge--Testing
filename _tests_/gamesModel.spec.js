const games = require("../data/models/gamesModel.js");
const db = require("../data/knexConfig.js");

const testGame = {
  title: "Pacman",
  genre: "Aracde",
  releaseYear: 1980
};

const testGames = [
  {
    title: "Pacman",
    genre: "Aracde",
    releaseYear: 1980
  },
  {
    title: "Mario",
    genre: "Aracde",
    releaseYear: null
  }
];

describe("games model", () => {
  beforeEach(() => {
    return db("games").truncate();
  });

  describe("add game method", () => {
    it("should insert a game", async () => {
      await games.addGame(testGame);

      const data = await db("games");
      const insertObject = await db("games").first();
      expect(data.length).toBe(1);
      expect(insertObject).toHaveProperty("title", "Pacman");
      expect(insertObject).toHaveProperty("genre", "Aracde");
      expect(insertObject).toHaveProperty("releaseYear", 1980);
    });
  });

  describe("get games method", () => {
    it("should retrieve a list of games", async () => {
      await db("games").insert(testGames);
      const allGames = await games.getGames();

      expect(allGames.length).toBe(2);
      expect(Array.isArray(allGames)).toBe(true);
    });
  });
});
