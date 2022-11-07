"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const pepper = process.env.BCRYPT_PASSWORD;
const salt = parseInt(process.env.BCRYPT_ROUNDS);
class UserShop {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT * FROM users";
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Can't get users: ${err}`);
            }
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT * FROM users WHERE id = $1";
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Can't get user ${id}: ${err}`);
            }
        });
    }
    create(firstName, lastName, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "INSERT INTO users (first_name, last_name, password) VALUES ($1, $2, $3) RETURNING *";
                const hash = yield bcrypt_1.default.hash(password + pepper, salt);
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [firstName, lastName, hash]);
                conn.release();
                const token = jsonwebtoken_1.default.sign(result.rows[0], process.env.JWT_SECRET);
                const { first_name, last_name } = result.rows[0];
                return { user: { first_name, last_name }, token };
            }
            catch (err) {
                throw new Error(`Can't create user: ${err}`);
            }
        });
    }
}
exports.default = UserShop;
