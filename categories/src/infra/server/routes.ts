import { Router } from "express";
import { addCategoryControllerFactory } from "../../main/factories/controllers/add-category-controller-factory";
import {
  adaptRoute,
  authorizedMiddleware,
  validateBodyMiddleware,
} from "@litee-blog/shared/infra/express";
import { AddCategoryDTO } from "../../presentation/DTOs/add-category-dto";
import { DeleteCategoryDTO } from "../../presentation/DTOs/delete-category-dto";
import { deleteCategoryControllerFactory } from "../../main/factories/controllers/delete-category-controller-factory";
import { listCategoryControllerFactory } from "../../main/factories/controllers/list-category-controller-factory";
const router = Router();

router.post(
  "/",
  authorizedMiddleware(),
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
