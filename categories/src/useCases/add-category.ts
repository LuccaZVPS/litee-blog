import { ICategory } from "../domain/entities/category";
import { IAddCategory } from "../domain/useCases/add-category";
import { categoryCreatedPubliser } from "../events/publishers/category-created-publisher";
import { IAddCategoryRepository } from "./protocols/add-category-repository";
import { CategoryCreated } from "@litee-blog/shared/infra/broker";
export class AddCategory implements IAddCategory {
  constructor(private readonly addCategoryRepository: IAddCategoryRepository) {}
  async add(title: string, imageName: string): Promise<ICategory> {
    const category = await this.addCategoryRepository.add(
      title,
      imageName,
    );
    await categoryCreatedPubliser.publisher<CategoryCreated>({
      id: category.id,
      title: category.title,
    });
    return category;
  }
}
