import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { DeleteCategoryDTO } from "../DTOs/delete-category-dto";
import { IDeleteCategory } from "../../domain/useCases/delete-category";
import { BadRequestError } from "@litee-blog/shared/presentation";

export class DeleteCategoryController implements IController {
  constructor(private readonly deleteCategory: IDeleteCategory) {}
  async handle(req: DeleteCategoryDTO): Promise<IResponse> {
    const errors = req.validationErrors;
    if (errors && errors.length > 0) {
      throw new BadRequestError(errors);
    }
    await this.deleteCategory.delete(req.id);
    return { status: 200, body: "Category deleted!" };
  }
}
