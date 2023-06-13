import { Request, Response, NextFunction } from "express";
import { BaseError } from "../../presentation/errors";
export const errorHandler = (
  err: Error | BaseError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof BaseError) {
    return res
      .status(err["statusCode"])
      .send({ errors: err.serializeErrors() });
  }
  return res
    .status(500)
    .send({ errors: [{ message: "something went wrong ):" }] });
};
