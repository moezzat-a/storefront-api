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
const auth_1 = __importDefault(require("../middleware/auth"));
const ordersShop_1 = __importDefault(require("../models/ordersShop"));
const orderHandler = function (app) {
    app.get("/orders", auth_1.default, index);
    app.get("/orders/:id", auth_1.default, show);
    app.post("/orders", auth_1.default, addOrder);
    app.post("/orders/:id/cart", auth_1.default, addOrderProduct);
    app.put("/orders/:id/status/:status", auth_1.default, updateStatus);
    app.delete("/orders/:id", auth_1.default, delOrder);
};
const order = new ordersShop_1.default();
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order.index();
        res.json(result);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order.show(req.params.id);
        res.json(result);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
});
const addOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order.addOrder(req.body);
        res.json(result);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
});
const updateStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order.UpdateOrderStatus(req.params.id, req.params.status);
        res.json(result);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
});
const delOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order.delOrder(req.params.id);
        res.json(result);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
});
const addOrderProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { quantity, productId } = req.body;
        const result = yield order.addOrderProduct(quantity, productId, req.params.id);
        res.json(result);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
});
exports.default = orderHandler;
