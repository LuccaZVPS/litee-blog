import { Router } from "express";
import { addCategoryControllerFactory } from "../../main/factories/controllers/add-category-controller-factory";
import {
  adaptRoute,
  authorizedMiddleware,
  fileMiddleware,
  validateBodyMiddleware,
} from "@litee-blog/shared/infra/express";
import { AddCategoryDTO } from "../../presentation/DTOs/add-category-dto";
import { DeleteCategoryDTO } from "../../presentation/DTOs/delete-category-dto";
import { deleteCategoryControllerFactory } from "../../main/factories/controllers/delete-category-controller-factory";
import { listCategoryControllerFactory } from "../../main/factories/controllers/list-category-controller-factory";
import { resolve } from "path";
const router = Router();
const rootDirectory = resolve(__dirname, "../../../");

router.post(
  "/",
  authorizedMiddleware(),
  fileMiddleware({
    allowedExtensions: ["png", "jpeg", "jpg"],
    limit: 5242880,
    dest: rootDirectory + "/uploads",
    tmpFolder: rootDirectory + "/tmp",
  }),
  validateBodyMiddleware(AddCategoryDTO),
  adaptRoute(addCategoryControllerFactory())
);
router.delete(
  "/",
  authorizedMiddleware(),
  validateBodyMiddleware(DeleteCategoryDTO),
  adaptRoute(deleteCategoryControllerFactory())
);
router.get("/", adaptRoute(listCategoryControllerFactory()));
export { router };
