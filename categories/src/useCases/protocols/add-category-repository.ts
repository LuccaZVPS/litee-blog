import { ICategory } from "../../domain/entities/category";

export interface IAddCategoryRepository {
  add(title: string, imagePath: string, imageName: string): Promise<ICategory>;
}
