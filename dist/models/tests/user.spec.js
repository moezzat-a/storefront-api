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
const userShop_1 = __importDefault(require("../userShop"));
const user = new userShop_1.default();
describe("All user methods is defined", () => {
    it("index method", () => {
        expect(user.index).toBeDefined();
    });
    it("create method", () => {
        expect(user.create).toBeDefined();
    });
    it("show method", () => {
        expect(user.show).toBeDefined();
    });
});
describe("ensure that every methods in user work as expected", () => {
    it("1. index all users", () => {
        () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield user.index();
            expect(result).toEqual([]);
        });
    });
    it("2. Create new user and ensure that it return token", () => {
        () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield user.create("Mohamed", "Ezzat", "moezzat123");
            expect(result.token).toBeDefined;
        });
    });
    it("3. show user by id", () => {
        () => __awaiter(void 0, void 0, void 0, function* () {
            const index = yield user.show("1");
            expect(index[0].firstName).toEqual("Mohamed");
            expect(index[0].lastName).toEqual("ezzat");
            expect(index[0].id).toEqual(1);
            expect(index[0].password).not.toEqual("moezzat123");
        });
    });
});
