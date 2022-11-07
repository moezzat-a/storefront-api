import { Pool } from "pg";
import "dotenv/config";

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
  POSTGRES_TEST_DATABASE,
  POSTGRES_HOST,
  NODE_ENV,
  POSTGRES_PORT,
} = process.env;

const Client: Pool = new Pool({
  port: parseInt(POSTGRES_PORT as string),
  host: POSTGRES_HOST,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: NODE_ENV === "test" ? POSTGRES_TEST_DATABASE : POSTGRES_DATABASE,
});

export default Client;
