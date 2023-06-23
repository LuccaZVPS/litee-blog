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
import { ListPostDTO } from "../../../presentation/DTOs/list-post-dto";
import { listPostControllerFactory } from "../../../main/factories/controllers/list-post-controller-factory";
import { GetPostDTO } from "../../../presentation/DTOs/get-post-dto";
import { getPostControllerFactory } from "../../../main/factories/controllers/get-post-controller-factory";
const router = Router();
const rootDirectory = resolve(__dirname, "../../../../");
router.post(
  "/",
  authorizedMiddleware(),
  validateBodyMiddleware(AddPostDTO),
  fileMiddleware({
    allowedExtensions: ["png", "jpeg", "jpg"],
    limit: 5242880,
    dest: rootDirectory + "/uploads",
    tmpFolder: rootDirectory + "/tmp",
  }),
  adaptRoute(addPostControllerFactory())
);
router.delete(
  "/:id",
  authorizedMiddleware(),
  validateBodyMiddleware(DeletePostDTO),
  adaptRoute(deletePostControllerFactory())
);
router.get(
  "/list/:page",
  validateBodyMiddleware(ListPostDTO),
  adaptRoute(listPostControllerFactory())
);
router.get(
  "/:id",
  validateBodyMiddleware(GetPostDTO),
  adaptRoute(getPostControllerFactory())
);
export { router };
