import UserShop from "../models/userShop";
import express, { Response, Request } from "express";
import auth from "../middleware/auth";
import { User } from "../types/user";

const user = new UserShop();

const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await user.index();
    res.json(users);
  } catch (err) {
    res.status(400).json((<Error>err).message);
  }
};

const show = async (_req: Request, res: Response): Promise<void> => {
  try {
    const id = _req.params.id;
    const users = await user.show(id);
    res.json(users);
  } catch (err) {
    res.status(400).json((<Error>err).message);
  }
};

const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, password }: User = req.body;
    const users = await user.create(firstName, lastName, password);
    res.json(users);
  } catch (err) {
    res.status(400).json((<Error>err).message);
  }
};

const userHandler = (app: express.Application) => {
  app.get("/users", auth, index);
  app.get("/users/:id", auth, show);
  app.post("/users", create);
};

export default userHandler;
