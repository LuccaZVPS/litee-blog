import { DeleteCategoryController } from "../../../presentation/controllers/delete-category-controller";
import { deleteCategoryFactory } from "../useCases/delete-category-factory";

export const deleteCategoryControllerFactory = () => {
  return new DeleteCategoryController(deleteCategoryFactory());
};
