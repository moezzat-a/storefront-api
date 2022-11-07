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
class ProductShop {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT * FROM products";
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Can't get Products: ${err}`);
            }
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT * FROM products WHERE id = $1";
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Can't get Products: ${err}`);
            }
        });
    }
    showByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT * FROM products WHERE category = $1";
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [category]);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Can't get Products: ${err}`);
            }
        });
    }
    create(name, price, category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *";
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [name, price, category]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Can't get Products: ${err}`);
            }
        });
    }
    delete(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "DELETE FROM Products WHERE id = $1 RETURNING *";
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [productId]);
                conn.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Can't delete ${productId} Product: ${error}`);
            }
        });
    }
}
exports.default = ProductShop;
