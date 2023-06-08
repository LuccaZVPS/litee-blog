import { NextFunction, Request, Response } from "express";
import { IMiddleware } from "../../presentation/middleware/middleware";

export const adaptMiddeware = (middleware: IMiddleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await middleware.handle(req);
    next();
  };
};
