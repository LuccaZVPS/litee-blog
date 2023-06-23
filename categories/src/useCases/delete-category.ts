import { NotFoundError } from "@litee-blog/shared/presentation/errors";
import { IDeleteCategory } from "../domain/useCases/delete-category";
import { IDeleteCategoryRepository } from "./protocols/delete-category-repository";
import { IFindCategoryRepository } from "./protocols/find-category-repository";
import fs from "fs";
export class DeleteCategory implements IDeleteCategory {
  constructor(
    private readonly deleteCategoryRepository: IDeleteCategoryRepository,
    private readonly findCategoryRepository: IFindCategoryRepository
  ) {}
  async delete(id: string): Promise<void> {
    const categoryFound = await this.findCategoryRepository.find({ _id: id });
    if (categoryFound.length < 1) {
      throw new NotFoundError("Category not found");
    }
    await this.deleteCategoryRepository.delete(id);
    fs.unlinkSync(categoryFound[0].imagePath);
  }
}
