import Client from "../database";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { User, UserCreated } from "../types/user";

const pepper: string | undefined = process.env.BCRYPT_PASSWORD;
const salt: number = parseInt(process.env.BCRYPT_ROUNDS as string);

export default class UserShop {
  async index(): Promise<User[]> {
    try {
      const sql = "SELECT * FROM users";
      const conn = await Client.connect();
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Can't get users: ${err}`);
    }
  }

  async show(id: string): Promise<User[]> {
    try {
      const sql = "SELECT * FROM users WHERE id = $1";
      const conn = await Client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Can't get user ${id}: ${err}`);
    }
  }

  async create(
    firstName: string,
    lastName: string,
    password: string
  ): Promise<UserCreated> {
    try {
      const sql =
        "INSERT INTO users (first_name, last_name, password) VALUES ($1, $2, $3) RETURNING *";

      const hash = await bcrypt.hash(password + pepper, salt);

      const conn = await Client.connect();
      const result = await conn.query(sql, [firstName, lastName, hash]);
      conn.release();
      const token = jsonwebtoken.sign(
        result.rows[0],
        <string>process.env.JWT_SECRET
      );
      const { first_name, last_name } = result.rows[0];
      return { user: { first_name, last_name }, token };
    } catch (err) {
      throw new Error(`Can't create user: ${err}`);
    }
  }
}
