import { NextFunction, Request, Response } from "express";
import { middlewareValidator } from "../../presentation/middlewares";
import { authMiddleware } from "../../presentation/middlewares/auth-middleware";

export const adaptMiddeware = (
  middleware: (dto: any, res: any) => Promise<void>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
      userId: req.accountId,
      cookies: req.cookies,
    };
    await middleware(request, req);
    next();
  };
};
export const authorizedMiddleware = () => adaptMiddeware(authMiddleware.handle);
export const validateBodyMiddleware = (dto: any) =>
  adaptMiddeware(middlewareValidator.handle(dto));
