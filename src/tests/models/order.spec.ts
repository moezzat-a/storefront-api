import OrderShop from "../../models/ordersShop";
import ProductShop from "../../models/productShop";

const order = new OrderShop();
describe("ensure that every method in order module has defined", () => {
  it("Index function is defined", function (): void {
    expect(order.index).toBeDefined();
  });

  it("show function is defined", function (): void {
    expect(order.show).toBeDefined();
  });

  it("Create function is defined", function (): void {
    expect(order.addOrder).toBeDefined();
  });

  it("Update order status", function (): void {
    expect(order.UpdateOrderStatus).toBeDefined();
  });
  it("Delete function is defined", function (): void {
    expect(order.delOrder).toBeDefined();
  });
  it("add order to order_products table", function (): void {
    expect(order.addOrderProduct).toBeDefined();
  });
});

describe("ensure that every function do what should it do", () => {
  beforeAll(() => {
    const prod = new ProductShop();
    prod.create("product1", 150, "category1");
  });
  afterAll(() => {
    const prod = new ProductShop();
    prod.delete("1");
  });
  it("1. show all orders", (): void => {
    async (): Promise<void> => {
      const result = await order.index();
      expect(result).toEqual([]);
    };
  });

  it("2. add new order", () => {
    async () => {
      const result = await order.addOrder({ userId: "1", status: "active" });
      expect(result).toEqual({
        id: 1,
        status: "active",
        userId: "1",
      });
    };
  });

  it("3. Show specific order by order id", () => {
    async () => {
      const result = await order.show("1");
      expect(result).toEqual({
        id: 1,
        status: "active",
        userId: "1",
      });
    };
  });

  it("4. update or change status of any order", () => {
    async () => {
      const result = await order.UpdateOrderStatus("1", "completed");
      expect(result).toEqual({
        id: 1,
        status: "completed",
        userId: "1",
      });
    };
  });

  it("5. Add order to order_products table must added", () => {
    async () => {
      const result = await order.addOrderProduct(2, "1", "1");
      expect(result).toEqual({
        id: 1,
        quantity: 2,
        product_id: "1",
        order_id: "1",
      });
    };
  });

  it("6. Delete specific order by order id", () => {
    async () => {
      const result = await order.delOrder("1");
      expect(result).toEqual({
        id: 1,
        status: "completed",
        userId: "1",
      });
    };
  });
});
