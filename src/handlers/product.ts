import express, { Response, Request } from "express";
import ProductShop from "../models/productShop";
import { Product } from "../types/product";
import auth from "../middleware/auth";

const productHandler = function (app: express.Application) {
  app.get("/products", index);
  app.get("/products/:id", show);
  app.post("/products", auth, create);
  app.delete("/products/:id", auth, removeProduct);
  app.get("/products/category/:category", showByCategory);
};

const product = new ProductShop();

const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    const products = await product.index();
    res.json(products);
  } catch (err) {
    res.status(400).json((<Error>err).message);
  }
};

const show = async (_req: Request, res: Response): Promise<void> => {
  try {
    const id = _req.params.id;
    const products = await product.show(id);
    res.json(products);
  } catch (err) {
    res.status(400).json((<Error>err).message);
  }
};

const showByCategory = async (_req: Request, res: Response): Promise<void> => {
  try {
    const category = _req.params.category;
    const products = await product.showByCategory(category);
    res.json(products);
  } catch (err) {
    res.status(400).json((<Error>err).message);
  }
};

const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, price, category }: Product = req.body;
    const products = await product.create(name, price, category);
    res.json(products);
  } catch (err) {
    res.status(400).json((<Error>err).message);
  }
};

const removeProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await product.delete(req.params.id);
    res.json(products);
  } catch (err) {
    res.status(400).json((<Error>err).message);
  }
};

export default productHandler;
