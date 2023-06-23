import { CategoryResitory } from "../../../infra/mongo/category-repository";
import { DeleteCategory } from "../../../useCases/delete-category";

export const deleteCategoryFactory = () => {
  const categoryRepository = new CategoryResitory();
  return new DeleteCategory(categoryRepository, categoryRepository);
};
