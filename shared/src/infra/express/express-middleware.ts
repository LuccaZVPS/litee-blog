import { NextFunction, Request, Response } from "express";
import { IMiddleware } from "../../presentation/protocols/middleware";

export const adaptMiddeware = (middleware: IMiddleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await middleware.handle(req);
    next();
  };
};
