import supertest from "supertest";
import app from "../../server";

const token = process.env.TOKEN_TEST as string;

const request = supertest(app);

describe("Test endpoint of products", () => {
  it("1- index endpoint", async () => {
    const response = await request.get("/products");

    expect(response.status).toBe(200);
  });

  it("2- show endpoint", async () => {
    const response = await request.get("/products/1");

    expect(response.status).toBe(200);
  });

  it("4- create endpoint", async () => {
    const response = await request
      .post("/products")
      .send({
        name: "ipad pro",
        price: "1200",
        category: "electronics",
      })
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
  });
  it("4.1- create endpoint with invalid token", async () => {
    const response = await request
      .post("/products")
      .send({
        name: "ipad pro",
        price: "1200",
        category: "electronics",
      })
      .set("Authorization", "Bearer " + token + "c");
    expect(response.status).toBe(401);
  });

  it("5- Delete products endpoint", async () => {
    const response = await request
      .delete("/products/15")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
  });
  it("5.1- Delete products endpoint with invalid token", async () => {
    const response = await request
      .delete("/products/1")
      .set("Authorization", "Bearer " + token + "c");
    expect(response.status).toBe(401);
  });
});

// /product/delete/:productId
// /products/category/:category
