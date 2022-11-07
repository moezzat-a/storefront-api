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
const productShop_1 = __importDefault(require("../productShop"));
const product = new productShop_1.default();
describe("Product functions is defined", function () {
    it("Index function is defined", function () {
        expect(product.index).toBeDefined();
    });
    it("show function is defined", function () {
        expect(product.show).toBeDefined();
    });
    it("Create function is defined", function () {
        expect(product.create).toBeDefined();
    });
    it("showByCategory function is defined", function () {
        expect(product.showByCategory).toBeDefined();
    });
    it("Delete function is defined", function () {
        expect(product.delete).toBeDefined();
    });
});
describe("Test that every function work as expected", () => {
    it("1. index all products", () => {
        () => __awaiter(void 0, void 0, void 0, function* () {
            const index = yield product.index();
            expect(index).toEqual([
                {
                    id: 1,
                    name: "MacBook pro",
                    price: 150,
                    category: "electronics",
                },
            ]);
        });
    });
    it("2. Create new product", () => {
        () => __awaiter(void 0, void 0, void 0, function* () {
            const create = yield product.create("MacBook pro", 150, "electronics");
            expect(create).toEqual({
                id: 1,
                name: "MacBook pro",
                price: 150,
                category: "electronics",
            });
        });
    });
    it("3. show product by id", () => {
        () => __awaiter(void 0, void 0, void 0, function* () {
            const show = yield product.show("1");
            expect(show).toEqual({
                id: 1,
                name: "MacBook pro",
                category: "electronics",
                price: 150,
            });
        });
    });
    it("4. show all products in specific category", () => {
        () => __awaiter(void 0, void 0, void 0, function* () {
            const show = yield product.showByCategory("electronics");
            expect(show).toEqual([
                {
                    id: 1,
                    name: "MacBook pro",
                    category: "electronics",
                    price: 150,
                },
            ]);
        });
    });
    it("5. Delete any product by using product id", () => {
        () => __awaiter(void 0, void 0, void 0, function* () {
            const show = yield product.delete("1");
            expect(show).toEqual({
                id: 1,
                name: "MacBook pro",
                category: "electronics",
                price: 150,
            });
        });
    });
});
