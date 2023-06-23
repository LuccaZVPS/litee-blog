import { ICategory } from "../entities/category";

export interface IGetCategory {
  get(filters: ICategoryFilters): Promise<ICategory[]>;
}
export interface ICategoryFilters {
  _id?: string;
  title?: string;
}
