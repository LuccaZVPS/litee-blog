import { ListCategoryController } from "../../../presentation/controllers/list-category-controller";
import { getCategoryFactory } from "../useCases/get-category-factory";

export const listCategoryControllerFactory = () => {
  return new ListCategoryController(getCategoryFactory());
};
