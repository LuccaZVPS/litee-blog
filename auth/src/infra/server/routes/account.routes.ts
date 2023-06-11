import { Router } from "express";
import { adaptRoute } from "@litee-blog/shared/infra/express";
import { makeSignUpController } from "../../../main/factories/controllers/signup-controller-factory";
import { makeVerifyAccountController } from "../../../main/factories/controllers/verify-account-controller-factory";
import { middlewareValidator } from "@litee-blog/shared/presentation/middlewares";
import { adaptMiddeware } from "@litee-blog/shared/infra/express";
import { SignUpDTO } from "../../../presentation/controllers/DTOs/signup-dto";
import { VerifyAccountDTO } from "../../../presentation/controllers/DTOs/verify-account-dto";
import { makeSigninController } from "../../../main/factories/controllers/signin-controller";
import { SignInDTO } from "../../../presentation/controllers/DTOs/signin-dto";
export const accountRoutes = Router();
accountRoutes.post(
  "/signup",
  adaptMiddeware(middlewareValidator.handle(SignUpDTO)),
  adaptRoute(makeSignUpController())
);
accountRoutes.post(
  "/signin",
  adaptMiddeware(middlewareValidator.handle(SignInDTO)),
  adaptRoute(makeSigninController())
);
accountRoutes.post(
  "/verify/:id/:secret",
  adaptMiddeware(middlewareValidator.handle(VerifyAccountDTO)),
  adaptRoute(makeVerifyAccountController())
);
