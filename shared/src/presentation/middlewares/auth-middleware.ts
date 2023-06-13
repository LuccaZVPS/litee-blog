import { Request } from "express";
import { Unauthorized } from "../errors";
import { verify } from "jsonwebtoken";
export class AuthMiddleware {
  async handle(body: any, req: Request) {
    try {
      const jwt = body.cookies?.jwt;
      if (!jwt) {
        throw new Unauthorized("Unauthorized!");
      }
      const decodedJWT = verify(jwt, process.env.JWT_SECRET as string) as any;
      if (!decodedJWT || !decodedJWT.accountId) {
        throw new Unauthorized("Unauthorized");
      }
      req.accountId = decodedJWT.accountId;
    } catch (e) {
      throw new Unauthorized("Unauthorized");
    }
  }
}
export const authMiddleware = new AuthMiddleware();
