import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { DeleteCategoryDTO } from "../DTOs/delete-category-dto";
import { IDeleteCategory } from "../../domain/useCases/delete-category";
import { amqp } from "../..";
import { EventNames, CategoryDeleted } from "@litee-blog/shared/infra/broker";
import { BadRequestError } from "@litee-blog/shared/presentation";

export class DeleteCategoryController implements IController {
  constructor(private readonly deleteCategory: IDeleteCategory) {}
  async handle(req: DeleteCategoryDTO): Promise<IResponse> {
    const errors = req.validationErrors;
    if (errors.length > 0) {
      throw new BadRequestError(errors);
    }
    await this.deleteCategory.delete(req.id);
    amqp.publish(EventNames.CategoryDeleted, { id: req.id } as CategoryDeleted);
    return { status: 200, body: "Category deleted!" };
  }
}
