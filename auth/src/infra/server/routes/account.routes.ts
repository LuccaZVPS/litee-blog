import { Router } from "express";
import { adaptRoute } from "@litee-blog/shared/infra/express";
import { makeSignUpController } from "../../../main/factories/controllers/signup-controller-factory";
export const accountRoutes = Router();
accountRoutes.post("/signup", adaptRoute(makeSignUpController()));
