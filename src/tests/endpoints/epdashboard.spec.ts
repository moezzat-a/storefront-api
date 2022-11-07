import supertest from "supertest";
import app from "../../server";

const token = process.env.TOKEN_TEST as string;

const request = supertest(app);

describe("Test endpoint of dashboard", () => {
  it("1- Get all user orders endpoint", async () => {
    const response = await request
      .get("/user-orders/1")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
  });

  it("2- Get current user orders endpoint", async () => {
    const response = await request
      .get("/user-orders/1/current")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
  });

  it("3- Get all completed user's order endpoint", async () => {
    const response = await request
      .get("/user-orders/1/completed")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
  });

  it("4- Get all active user's orders", async () => {
    const response = await request
      .get("/user-orders/1/active")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
  });
});
