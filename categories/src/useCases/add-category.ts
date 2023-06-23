import { ICategory } from "../domain/entities/category";
import { IAddCategory } from "../domain/useCases/add-category";
import { IAddCategoryRepository } from "./protocols/add-category-repository";

export class AddCategory implements IAddCategory {
  constructor(private readonly addCategoryRepository: IAddCategoryRepository) {}
  async add(title: string, imagePath: string): Promise<ICategory> {
    const filename = imagePath.split("/")[imagePath.split("/").length - 1];
    return this.addCategoryRepository.add(title, imagePath, filename);
  }
}
