import supertest from "supertest";
import app from "../../server";
import UserShop from "../../models/userShop";
import ProductShop from "../../models/productShop";

const token = process.env.TOKEN_TEST as string;

const request = supertest(app);

describe("Test endpoint of orders", () => {
  beforeAll(() => {
    const user = new UserShop();
    const product = new ProductShop();
    user.create("mohamed", "ezzat", "1234");
    product.create("product", 111, "category");
  });
  it("1- index endpoint", async () => {
    const response = await request
      .get("/orders")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
  });

  it("2- show endpoint", async () => {
    const response = await request
      .get("/orders/1")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
  });

  it("3- create endpoint", async () => {
    const response = await request
      .post("/orders")
      .send({
        status: "active",
        userId: "1",
      })
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
  });

  it("4- update status endpoint", async () => {
    const response = await request
      .put("/orders/1/status/active")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
  });

  it("5- Delete orders endpoint", async () => {
    const response = await request
      .delete("/orders/1")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
  });

  it("6- add to order_products table endpoint", async () => {
    const response = await request
      .post("/orders/1/cart")
      .send({
        productId: "1",
        quantity: 15,
      })
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(400);
  });
});

// /orders/:id/cart
