import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { DeleteCategoryDTO } from "../DTOs/delete-category-dto";
import { IDeleteCategory } from "../../domain/useCases/delete-category";

export class DeleteCategoryController implements IController {
  constructor(private readonly deleteCategory: IDeleteCategory) {}
  async handle(req: DeleteCategoryDTO): Promise<IResponse> {
    await this.deleteCategory.delete(req.id);
    return { status: 200, body: "Category deleted!" };
  }
}