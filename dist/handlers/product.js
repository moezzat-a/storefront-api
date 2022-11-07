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
const productShop_1 = __importDefault(require("../models/productShop"));
const auth_1 = __importDefault(require("../middleware/auth"));
const productHandler = function (app) {
    app.get("/products", index);
    app.get("/products/:id", show);
    app.post("/products", auth_1.default, create);
    app.delete("/products/:id", auth_1.default, removeProduct);
    app.get("/products/category/:category", showByCategory);
};
const product = new productShop_1.default();
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product.index();
        res.json(products);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
});
const show = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = _req.params.id;
        const products = yield product.show(id);
        res.json(products);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
});
const showByCategory = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = _req.params.category;
        const products = yield product.showByCategory(category);
        res.json(products);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price, category } = req.body;
        const products = yield product.create(name, price, category);
        res.json(products);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
});
const removeProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product.delete(req.params.id);
        res.json(products);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
});
exports.default = productHandler;
