import { Request, Response, Application } from "express";
import auth from "../middleware/auth";
import Dashboard from "../services/dashboardModel";

const dashboard = function (app: Application) {
  app.get("/user-orders/:id", auth, userOrder);
  app.get("/user-orders/:id/current", auth, currentOrder);
  app.get("/user-orders/:id/completed", auth, completedOrder);
  app.get("/user-orders/:id/active", auth, activeOrder);
  // app.get("/popular-products", popularProduct);
};

const dash = new Dashboard();

const currentOrder = async (_req: Request, res: Response): Promise<void> => {
  try {
    const result = await dash.currentOrder(_req.params.id);
    res.json(result);
  } catch (err) {
    res.status(400).json((<Error>err).message);
  }
};

const completedOrder = async (_req: Request, res: Response): Promise<void> => {
  try {
    const result = await dash.completedOrder(_req.params.id);
    res.json(result);
  } catch (err) {
    res.status(400).json((<Error>err).message);
  }
};

const userOrder = async (_req: Request, res: Response): Promise<void> => {
  try {
    const result = await dash.getAllUserOrder(_req.params.id);
    res.json(result);
  } catch (err) {
    res.status(400).json((<Error>err).message);
  }
};

const activeOrder = async (_req: Request, res: Response): Promise<void> => {
  try {
    const result = await dash.activeOrder(_req.params.id);
    res.json(result);
  } catch (err) {
    res.status(400).json((<Error>err).message);
  }
};

// const popularProduct = async (_req: Request, res: Response): Promise<void> => {
//   try {
//     const result = await dash.topPopularProduct();
//     const prod = result.map((i) => i.name);
//     const pop = new Set(prod);
//     console.log(pop);
//     res.json(result);
//   } catch (err) {
//     res.status(400).json((<Error>err).message);
//   }
// };

export default dashboard;
