import { ICategory } from "../domain/entities/category";
import {
  ICategoryFilters,
  IGetCategory,
} from "../domain/useCases/get-category";
import { IFindCategoryRepository } from "./protocols/find-category-repository";

export class GetCategory implements IGetCategory {
  constructor(
    private readonly findCategoryRepository: IFindCategoryRepository
  ) {}
  async get(filters: ICategoryFilters): Promise<ICategory[]> {
    return this.findCategoryRepository.find(filters);
  }
}
