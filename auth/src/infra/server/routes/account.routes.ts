import { Router } from "express";
import { adaptRoute } from "@litee-blog/shared/infra/express";
import { makeSignUpController } from "../../../main/factories/controllers/signup-controller-factory";
import { makeVerifyAccount } from "../../../main/factories/useCases/verify-account-factory";
import { makeVerifyAccountController } from "../../../main/factories/controllers/verify-account-controller-factory";
export const accountRoutes = Router();
accountRoutes.post("/signup", adaptRoute(makeSignUpController()));
accountRoutes.post(
  "/verify/:id/:secret",
  adaptRoute(makeVerifyAccountController())
);
