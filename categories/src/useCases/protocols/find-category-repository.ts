import { ICategory } from "../../domain/entities/category";
import { ICategoryFilters } from "../../domain/useCases/get-category";

export interface IFindCategoryRepository {
  find(filters: ICategoryFilters): Promise<ICategory[]>;
}
