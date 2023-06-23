import { Router } from "express";
import { resolve } from "path";
import {
  adaptRoute,
  fileMiddleware,
  validateBodyMiddleware,
  authorizedMiddleware,
} from "@litee-blog/shared/infra/express";
import { addPostControllerFactory } from "../../../main/factories/controllers/add-post-controller-factory";
import { AddPostDTO } from "../../../presentation/DTOs/add-post-dto";
const router = Router();
const rootDirectory = resolve(__dirname, "../../../../");
router.post(
  "/",
  authorizedMiddleware(),
  fileMiddleware({
    allowedExtensions: ["png", "jpeg", "jpg"],
    limit: 5242880,
    dest: rootDirectory + "/uploads",
    tmpFolder: rootDirectory + "/tmp",
  }),
  validateBodyMiddleware(AddPostDTO),

  adaptRoute(addPostControllerFactory())
);

export { router };