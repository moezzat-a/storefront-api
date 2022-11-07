import "dotenv/config";
import express, { Response, Request } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import productHandler from "./handlers/product";
import userHandler from "./handlers/user";
import dashboard from "./handlers/dashboard";
import orderHandler from "./handlers/order";

const app: express.Application = express();
const port: string | undefined = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response): void => {
  res.send("Welcome to Store front API");
});

productHandler(app);
userHandler(app);
orderHandler(app);
dashboard(app);

app.listen(port, (): void => {
  console.log(`App is running at port: ${port}`);
});

export default app;
