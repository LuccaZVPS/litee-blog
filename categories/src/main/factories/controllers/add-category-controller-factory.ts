import { AddCategoryController } from "../../../presentation/controllers/add-category-controller";
import { addCategoryFactory } from "../useCases/add-category-factory";

export const addCategoryControllerFactory = () => {
  return new AddCategoryController(addCategoryFactory());
};
