import { Router } from "express";
import {
  adaptRoute,
  fileMiddleware,
  validateBodyMiddleware,
} from "@litee-blog/shared/infra/express";
import { addPostControllerFactory } from "../../../main/factories/controllers/add-post-controller-factory";
import { AddPostDTO } from "../../../presentation/DTOs/add-post-dto";
const router = Router();

router.post(
  "/",
  validateBodyMiddleware(AddPostDTO),
  fileMiddleware({
    allowedExtensions: ["png", "jpeg", "jpg"],
    limit: 5242880,
    dest: "./uploads",
    tmpFolder: "",
  }),
  adaptRoute(addPostControllerFactory())
);

export { router };
