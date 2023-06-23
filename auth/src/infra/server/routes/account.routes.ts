import { Router } from "express";
import {
  adaptRoute,
  validateBodyMiddleware,
} from "@litee-blog/shared/infra/express";
import { makeSignUpController } from "../../../main/factories/controllers/signup-controller-factory";
import { makeVerifyAccountController } from "../../../main/factories/controllers/verify-account-controller-factory";
import { SignUpDTO } from "../../../presentation/controllers/DTOs/signup-dto";
import { VerifyAccountDTO } from "../../../presentation/controllers/DTOs/verify-account-dto";
import { makeSigninController } from "../../../main/factories/controllers/signin-controller";
import { SignInDTO } from "../../../presentation/controllers/DTOs/signin-dto";
export const accountRoutes = Router();
accountRoutes.post(
  "/signup",
  validateBodyMiddleware(SignUpDTO),
  adaptRoute(makeSignUpController())
);
accountRoutes.post(
  "/signin",
  validateBodyMiddleware(SignInDTO),
  adaptRoute(makeSigninController())
);
accountRoutes.post(
  "/verify/:id/:secret",
  validateBodyMiddleware(VerifyAccountDTO),

  adaptRoute(makeVerifyAccountController())
);
