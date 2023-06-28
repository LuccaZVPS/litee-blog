import { Router } from "express";
import {
  adaptRoute,
  validateBodyMiddleware,
} from "@litee-blog/shared/infra/express";
import { makeSigninController } from "../../../main/factories/controllers/signin-controller";
import { SignInDTO } from "../../../presentation/controllers/DTOs/signin-dto";
export const accountRoutes = Router();

accountRoutes.post(
  "/signin",
  validateBodyMiddleware(SignInDTO),
  adaptRoute(makeSigninController())
);
