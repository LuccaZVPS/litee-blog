import { ICategory } from "../../domain/entities/category";

export interface IAddCategoryRepository {
  add(title: string, imageName: string): Promise<ICategory>;
}
