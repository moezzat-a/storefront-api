import express, { Request, Response } from "express";
import auth from "../middleware/auth";
import OrderShop from "../models/ordersShop";

const orderHandler = function (app: express.Application) {
  app.get("/orders", auth, index);
  app.get("/orders/:id", auth, show);
  app.post("/orders", auth, addOrder);
  app.post("/orders/:id/cart", auth, addOrderProduct);
  app.put("/orders/:id/status/:status", auth, updateStatus);
  app.delete("/orders/:id", auth, delOrder);
};

const order = new OrderShop();

const index = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await order.index();
    res.json(result);
  } catch (err) {
    res.status(400).json((<Error>err).message);
  }
};

const show = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await order.show(req.params.id);

    res.json(result);
  } catch (err) {
    res.status(400).json((<Error>err).message);
  }
};

const addOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await order.addOrder(req.body);

    res.json(result);
  } catch (err) {
    res.status(400).json((<Error>err).message);
  }
};

const updateStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await order.UpdateOrderStatus(
      req.params.id,
      req.params.status
    );

    res.json(result);
  } catch (err) {
    res.status(400).json((<Error>err).message);
  }
};

const delOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await order.delOrder(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(400).json((<Error>err).message);
  }
};

const addOrderProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { quantity, productId } = req.body;
    const result = await order.addOrderProduct(
      quantity,
      productId,
      req.params.id
    );
    res.json(result);
  } catch (err) {
    res.status(400).json((<Error>err).message);
  }
};

export default orderHandler;
