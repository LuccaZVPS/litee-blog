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
  async add(title: string, id: string) {
    await prisma.category.create({
      data: {
        title,
        id,
      },
    });
  }
  async delete(id: string) {
    await prisma.category.delete({
      where: {
        id,
      },
    });
  }
  async update(id: string, title: string) {
    await prisma.category.update({
      where: {
        id,
      },
      data: {
        title,
      },
    });
  }
}
