import Client from "../database";
import { Product } from "../types/product";

export default class ProductShop {
  async index(): Promise<Product[]> {
    try {
      const sql = "SELECT * FROM products";
      const conn = await Client.connect();

      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Can't get Products: ${err}`);
    }
  }

  async show(id: string): Promise<Product> {
    try {
      const sql = "SELECT * FROM products WHERE id = $1";
      const conn = await Client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Can't get Products: ${err}`);
    }
  }

  async showByCategory(category: string): Promise<Product[]> {
    try {
      const sql = "SELECT * FROM products WHERE category = $1";
      const conn = await Client.connect();
      const result = await conn.query(sql, [category]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Can't get Products: ${err}`);
    }
  }

  async create(
    name: string,
    price: number,
    category: string
  ): Promise<Product> {
    try {
      const sql =
        "INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *";
      const conn = await Client.connect();
      const result = await conn.query(sql, [name, price, category]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Can't get Products: ${err}`);
    }
  }

  async delete(productId: string): Promise<Product> {
    try {
      const sql = "DELETE FROM Products WHERE id = $1 RETURNING *";
      const conn = await Client.connect();
      const result = await conn.query(sql, [productId]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Can't delete ${productId} Product: ${error}`);
    }
  }
}
