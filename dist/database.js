"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
require("dotenv/config");
const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DATABASE, POSTGRES_TEST_DATABASE, POSTGRES_HOST, NODE_ENV, POSTGRES_PORT, } = process.env;
const Client = new pg_1.Pool({
    port: parseInt(POSTGRES_PORT),
    host: POSTGRES_HOST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: NODE_ENV === "test" ? POSTGRES_TEST_DATABASE : POSTGRES_DATABASE,
});
exports.default = Client;
