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
const userShop_1 = __importDefault(require("../models/userShop"));
const auth_1 = __importDefault(require("../middleware/auth"));
const user = new userShop_1.default();
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user.index();
        res.json(users);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
});
const show = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = _req.params.id;
        const users = yield user.show(id);
        res.json(users);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, password } = req.body;
        const users = yield user.create(firstName, lastName, password);
        res.json(users);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
});
const userHandler = (app) => {
    app.get("/users", auth_1.default, index);
    app.get("/users/:id", auth_1.default, show);
    app.post("/users", create);
};
exports.default = userHandler;
