import { ICategory } from "../entities/category";

export interface IAddCategory {
  add(title: string, imagePath: string): Promise<ICategory>;
}
