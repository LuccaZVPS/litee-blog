import { ICategory } from "../../domain/entities/category";
import { IDeleteCategory } from "../../domain/useCases/delete-category";
import { IAddCategoryRepository } from "../../useCases/protocols/add-category-repository";
import {
  ICategoryFilters,
  IFindCategoryRepository,
} from "../../useCases/protocols/find-category-repository";
import { categoryModel } from "./models/repository-model";

export class CategoryResitory
  implements IAddCategoryRepository, IDeleteCategory, IFindCategoryRepository
{
  async add(
    title: string,
    imagePath: string,
    imageName: string
  ): Promise<ICategory> {
    return await categoryModel.create({ title, imageName, imagePath });
  }
  async delete(id: string): Promise<void> {
    await categoryModel.deleteOne({
      _id: id,
    });
  }
  async find(filters: ICategoryFilters): Promise<ICategory[]> {
    return await categoryModel.find({
      ...filters,
    });
  }
}
