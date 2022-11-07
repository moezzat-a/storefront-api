import Dashboard from "../../services/dashboardModel";
import OrderShop from "../../models/ordersShop";
const dash = new Dashboard();

describe("all dashboard methods are defined", () => {
  it("currentOrder method", () => {
    expect(dash.currentOrder).toBeDefined();
  });
  it("completeOrders method", () => {
    expect(dash.completedOrder).toBeDefined();
  });
  it("activeOrders method", () => {
    expect(dash.activeOrder).toBeDefined();
  });
  it("Get all user orders method", () => {
    expect(dash.getAllUserOrder).toBeDefined();
  });
});

describe("All dashboard methods work as expected", () => {
  const order = new OrderShop();
  order.addOrder({ userId: "1", status: "active" });
  // beforeAll(() => {
  //   const order = new OrderShop();
  //   order.addOrder({userId: "1", status: "active"})
  // })
  it("1. Get all user orders", () => {
    async () => {
      const result = await dash.getAllUserOrder("1");
      expect(result).toEqual([
        {
          id: 1,
          status: "active",
          userId: "1",
        },
      ]);
    };
  });

  it("2. Get current order", () => {
    async () => {
      const result = await dash.currentOrder("1");
      expect(result).toEqual({
        id: 1,
        status: "active",
        userId: "1",
      });
    };
  });
  it("3. get all completed orders", () => {
    async () => {
      order.UpdateOrderStatus("1", "completed");
      const result = await dash.completedOrder("1");
      expect(result).toEqual([
        {
          id: 1,
          status: "completed",
          userId: "1",
        },
      ]);
    };
  });

  it("4. Get all active orders", () => {
    async () => {
      const result = await dash.activeOrder("1");
      expect(result).toEqual([]);
    };
  });
});
