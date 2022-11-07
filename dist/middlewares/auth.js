"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var auth = function (req, res, next) {
    try {
        var authHead = req.headers.authorization;
        var token = authHead ? authHead.split(" ")[1] : "";
        jsonwebtoken_1["default"].verify(token, "secret");
        next();
    }
    catch (err) {
        res.status(401).json(err);
    }
};
exports["default"] = auth;
