import supertest from "supertest";
import app from "../../server";

const token = process.env.TOKEN_TEST as string;

const request = supertest(app);

describe("Test endpoint of users", () => {
  it("1- index endpoint", async () => {
    const response = await request
      .get("/users")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
  });
  it("1.1- index endpoint with wrong token", async () => {
    const response = await request
      .get("/users")
      .set("Authorization", "Bearer " + token + "c");
    expect(response.status).toBe(401);
  });
  it("2- show endpoint", async () => {
    const response = await request
      .get("/users/1")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
  });
  it("2.1- show endpoint with wrong token", async () => {
    const response = await request
      .get("/users/1")
      .set("Authorization", "Bearer " + token + "c");
    expect(response.status).toBe(401);
  });
  it("3- create endpoint", async () => {
    const response = await request.post("/users").send({
      firstName: "7amada",
      lastName: "elgen",
      password: "password123",
    });
    expect(response.status).toBe(200);
  });
  it("3- create endpoint with invalid data", async () => {
    const response = await request.post("/users").send({
      password: "password123",
    });
    expect(response.status).toBe(400);
  });
});
