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
import { deletePostControllerFactory } from "../../../main/factories/controllers/delete-post-controller-factory";
import { DeletePostDTO } from "../../../presentation/DTOs/delete-post-dto";
import { FindPostDTO } from "../../../presentation/DTOs/find-post-dto";
import { findPostControllerFactory } from "../../../main/factories/controllers/find-post-controller-factory";
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
router.delete(
  "/:id",
  authorizedMiddleware(),
  validateBodyMiddleware(DeletePostDTO),
  adaptRoute(deletePostControllerFactory())
);
router.get(
  "/:page",
  validateBodyMiddleware(FindPostDTO),
  adaptRoute(findPostControllerFactory())
);
export { router };
