import { PrismaClient } from "@prisma/client";
import { ICategory } from "../../domain/entities/category";
import { IDeleteCategory } from "../../domain/useCases/delete-category";
import { ICategoryFilters } from "../../domain/useCases/get-category";
import { IAddCategoryRepository } from "../../useCases/protocols/add-category-repository";
import { IFindCategoryRepository } from "../../useCases/protocols/find-category-repository";
const prisma = new PrismaClient()
export class CategoryResitory
  implements IAddCategoryRepository, IDeleteCategory, IFindCategoryRepository
{
  async add(
    title: string,
    imageName: string
  ): Promise<ICategory> {
    return await prisma.category.create({
      data:{
        title,imageName
      }
    })
  }
  async delete(id: string): Promise<void> {
    await prisma.category.delete({
      where:{
        id
      },
    })
  }
  async find(filters: ICategoryFilters): Promise<ICategory[]> {
    return await prisma.category.findMany({
      where:{
        AND:{
          ...filters
        }
      }
    })
  }
}
