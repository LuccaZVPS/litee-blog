import { ICategory } from "../../domain/entities/category";
import { IAddCategoryRepository } from "../../useCases/protocols/add-category-repository";
import { categoryModel } from "./models/repository-model";

export class CategoryResitory implements IAddCategoryRepository {
  async add(
    title: string,
    imagePath: string,
    imageName: string
  ): Promise<ICategory> {
    return await categoryModel.create({ title, imageName, imagePath });
  }
}
