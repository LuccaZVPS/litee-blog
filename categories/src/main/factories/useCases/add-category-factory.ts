import { CategoryResitory } from "../../../infra/mongo/category-repository";
import { AddCategory } from "../../../useCases/add-category";

export const addCategoryFactory = () => {
  const categoryRepository = new CategoryResitory();
  return new AddCategory(categoryRepository);
};
