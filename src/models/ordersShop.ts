import Client from "../database";
import { Order } from "../types/order";
import { OrderProduct } from "../types/orderproduct";

export default class OrderShop {
  // show all order on order table
  async index(): Promise<Order[]> {
    try {
      const sql = "SELECT * FROM orders";

      const conn = await Client.connect();
      const result = await conn.query(sql);

      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Can't create order: ${err}`);
    }
  }

  // show specific order by id
  async show(orderId: string): Promise<Order> {
    try {
      const sql = "SELECT * FROM orders WHERE id = $1";

      const conn = await Client.connect();
      const result = await conn.query(sql, [orderId]);

      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Can't create order: ${err}`);
    }
  }

  // add order to order table
  async addOrder(order: Order): Promise<Order> {
    try {
      const sql =
        "INSERT INTO orders (user_id, status) VALUES ($1, $2) RETURNING *";

      const conn = await Client.connect();
      const result = await conn.query(sql, [order.userId, order.status]);

      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Can't create order: ${err}`);
    }
  }

  // Delete order
  async delOrder(orderId: string): Promise<Order> {
    try {
      const sql = "DELETE FROM orders WHERE id = $1 RETURNING *";

      const conn = await Client.connect();
      const result = await conn.query(sql, [orderId]);

      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Can't create order: ${err}`);
    }
  }

  //Change status of order
  async UpdateOrderStatus(orderId: string, status: string): Promise<Order> {
    try {
      const sql = "UPDATE orders SET status = $1 WHERE id = $2 RETURNING *";

      const conn = await Client.connect();
      const result = await conn.query(sql, [status, orderId]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Can't update order: ${err}`);
    }
  }

  // Insert a new item into order_products table
  async addOrderProduct(
    quantity: number,
    productId: string,
    orderId: string
  ): Promise<OrderProduct> {
    try {
      const sql =
        "INSERT INTO order_products (quantity, product_id, order_id) VALUES ($1, $2, $3) RETURNING *";

      const conn = await Client.connect();
      const result = await conn.query(sql, [quantity, productId, orderId]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Can't add order to cart: ${err}`);
    }
  }
}
