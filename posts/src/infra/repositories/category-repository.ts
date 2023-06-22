import { prisma } from "../..";
import { IFindCategoriesRepository } from "../../useCases/protocols/find-categories";
export class CategoryRepository implements IFindCategoriesRepository {
  async find(categories: string[]): Promise<boolean> {
    const categoriesFound = await prisma.category.findMany({
      where: {
        id: { in: categories },
      },
    });
    if (categoriesFound.length !== categories.length) {
      return false;
    }
    return true;
  }
}
