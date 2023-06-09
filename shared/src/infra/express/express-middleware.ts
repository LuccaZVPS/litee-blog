import { NextFunction, Request, Response } from "express";
import { IMiddleware } from "../../presentation/protocols/middleware";
import { middlewareValidator } from "../../presentation/middlewares";

export const adaptMiddeware = (middleware: (dto: any) => Promise<void>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
      userId: req.userId,
    };
    await middleware(request);
    next();
  };
};
