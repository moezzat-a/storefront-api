"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const product_1 = __importDefault(require("./handlers/product"));
const user_1 = __importDefault(require("./handlers/user"));
const dashboard_1 = __importDefault(require("./handlers/dashboard"));
const order_1 = __importDefault(require("./handlers/order"));
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.send("Welcome to Store front API");
});
(0, product_1.default)(app);
(0, user_1.default)(app);
(0, order_1.default)(app);
(0, dashboard_1.default)(app);
app.listen(port, () => {
    console.log(`App is running at port: ${port}`);
});
exports.default = app;
