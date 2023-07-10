import { CategoryResitory } from "../../../infra/database/category-repository";
import { GetCategory } from "../../../useCases/get-category";

export const getCategoryFactory = () => {
  const categoryRepository = new CategoryResitory();
  return new GetCategory(categoryRepository);
};
