import Client from "../database";
import { Order } from "../types/order";

export default class Dashboard {
  // Get current or latest order by using user id;
  async currentOrder(userId: string): Promise<Order> {
    try {
      const sql = "SELECT * FROM orders WHERE user_id = $1 ORDER BY id DESC";
      const conn = await Client.connect();
      const result = await conn.query(sql, [userId]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Something bad happened, cannot get current Order: ${err}`
      );
    }
  }

  //Get all completed order by using user id
  async completedOrder(userId: string): Promise<Order[]> {
    try {
      const sql =
        "SELECT * FROM orders WHERE user_id = $1 AND status='completed'";
      const conn = await Client.connect();
      const result = await conn.query(sql, [userId]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(
        `Something bad happened, cannot get current Order: ${err}`
      );
    }
  }

  // Get active order from order table
  async activeOrder(userId: string): Promise<Order[]> {
    try {
      const sql = "SELECT * FROM orders WHERE user_id = $1 AND status='active'";
      const conn = await Client.connect();
      const result = await conn.query(sql, [userId]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(
        `Something bad happened, cannot get active orders: ${err}`
      );
    }
  }

  // Get all order related to user by user id;
  async getAllUserOrder(userId: string): Promise<Order[]> {
    try {
      const sql = "SELECT * FROM orders WHERE user_id = $1";
      const conn = await Client.connect();
      const result = await conn.query(sql, [userId]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(
        `Something bad happened, cannot get current Order: ${err}`
      );
    }
  }

  // Get Top 5 most popular products
  // async topPopularProduct(): Promise<{ name: string }[]> {
  //   try {
  //     const sql =
  //       "SELECT name FROM products INNER JOIN order_products ON products.id = order_products.product_id";
  //     // select * from scores order by score desc limit 10;
  //     //ORDER BY id DESC limit 5
  //     const conn = await Client.connect();
  //     const result = await conn.query(sql);
  //     conn.release();
  //     return result.rows;
  //   } catch (err) {
  //     throw new Error(
  //       `Something bad happened, cannot get current Order: ${err}`
  //     );
  //   }
  // }
}
