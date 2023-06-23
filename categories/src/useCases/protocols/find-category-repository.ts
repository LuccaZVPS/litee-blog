import { ICategory } from "../../domain/entities/category";

export interface IFindCategoryRepository {
  find(filters: ICategoryFilters): Promise<ICategory[]>;
}
export interface ICategoryFilters {
  _id?: string;
  title?: string;
}
