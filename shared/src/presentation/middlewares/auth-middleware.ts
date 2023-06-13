import { NextFunction, Request, Response } from "express";
import { Unauthorized } from "../errors";
import { verify } from "jsonwebtoken";
export class AuthMiddleware {
  async handle(req: Request) {
    try {
      const jwt = req.cookies?.jwt;
      if (!jwt) {
        throw new Unauthorized("Unauthorized!");
      }
      const decodedJWT = verify(jwt, process.env.jWT_SECRET as string) as any;
      if (!decodedJWT || !decodedJWT._id) {
        throw new Unauthorized("Unauthorized");
      }
      req.accountId = decodedJWT._id;
    } catch (e) {
      throw new Unauthorized("Unauthorized");
    }
  }
}
export const authMiddleware = new AuthMiddleware();
