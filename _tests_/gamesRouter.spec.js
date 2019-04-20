const server = require("../server.js");
const request = require("supertest");
const db = require("../data/knexConfig.js");

beforeEach(() => {
  return db("games").truncate();
});

describe("server", () => {
  it("should set testing env", () => {
    const env = process.env.DB_ENV;
    expect(env).toBe("testing");
  });

  describe("api/games GET", () => {
    it("should return status 200 on success", async () => {
      const res = await request(server).get("/api/games");
      expect(res.status).toBe(200);
      expect(res.type).toBe("application/json");
    });

    it("should return an array, even if there are no games", async () => {
      const res = await request(server).get("/api/games");
      expect(Array.isArray(res.body)).toBe(true);
    });

    it("should return status 404 on request to non existent page", async () => {
      const res = await request(server).get("/api/gam");
      expect(res.status).toBe(404);
    });
  });

  describe("api/games POST", () => {
    it("should return status 201 on success", async () => {
      const req = await request(server)
        .post("/api/games")
        .send({ title: "Pacman", genre: "Aracade", releaseYear: 1980 });
      expect(req.status).toBe(201);
      expect(req.type).toBe("application/json");
    });

    it("should return 422 status for incomplete information", async () => {
      const err = { Error: "The Title and Genre are required" };
      const req = await request(server)
        .post("/api/games")
        .send({ title: "", genre: "", releaseYear: 1980 });
      expect(req.status).toBe(422);
      expect(req.body).toEqual(err);
    });

    it("should return the newly create games object", async () => {
      const newGame = { title: "Pacman", genre: "Aracade", releaseYear: 1980 };
      const req = await request(server)
        .post("/api/games")
        .send(newGame);
      expect(req.status).toBe(201);
      expect(req.body).toBe(newGame);
    });
  });
});
