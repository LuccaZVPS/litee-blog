import { adaptRoute } from "@litee-blog/shared/infra/express";
import { Router } from "express";
import { getPictureControllerFactory } from "./factories/controllers/get-picture-controller";
const router = Router();
router.get("/picture/:id", adaptRoute(getPictureControllerFactory()));
export { router };
