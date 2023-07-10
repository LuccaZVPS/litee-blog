import { ICategory } from "../entities/category";

export interface IAddCategory {
  add(title: string, imageName: string): Promise<ICategory>;
}
