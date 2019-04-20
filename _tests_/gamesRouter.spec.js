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
});
