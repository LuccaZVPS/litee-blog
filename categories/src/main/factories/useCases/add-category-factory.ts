import { CategoryResitory } from "../../../infra/database/category-repository";
import { AddCategory } from "../../../useCases/add-category";

export const addCategoryFactory = () => {
  const categoryRepository = new CategoryResitory();
  return new AddCategory(categoryRepository);
};
