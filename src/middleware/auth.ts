import { NextFunction, Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";

const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHead = req.headers.authorization;
    const token = authHead ? authHead.split(" ")[1] : "";

    jsonwebtoken.verify(token, <string>process.env.JWT_SECRET);

    next();
  } catch (err) {
    res.status(401).json(err);
  }
};

export default auth;
