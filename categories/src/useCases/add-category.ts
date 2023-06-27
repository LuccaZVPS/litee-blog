import { ICategory } from "../domain/entities/category";
import { IAddCategory } from "../domain/useCases/add-category";
import { categoryCreatedPubliser } from "../events/publishers/category-created-publisher";
import { IAddCategoryRepository } from "./protocols/add-category-repository";
import { CategoryCreated } from "@litee-blog/shared/infra/broker";
import fs from "fs";
export class AddCategory implements IAddCategory {
  constructor(private readonly addCategoryRepository: IAddCategoryRepository) {}
  async add(title: string, imagePath: string): Promise<ICategory> {
    try {
      const filename = imagePath.split("/")[imagePath.split("/").length - 1];
      const category = await this.addCategoryRepository.add(
        title,
        imagePath,
        filename
      );
      await categoryCreatedPubliser.publisher<CategoryCreated>({
        id: category._id,
        title: category.title,
      });
      return category;
    } catch (e) {
      fs.unlinkSync(imagePath);
      throw e;
    }
  }
}
