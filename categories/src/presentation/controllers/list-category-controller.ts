import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { IGetCategory } from "../../domain/useCases/get-category";
import { BadRequestError, DTO } from "@litee-blog/shared/presentation";

export class ListCategoryController implements IController {
  constructor(private readonly getCategory: IGetCategory) {}
  async handle(req: DTO): Promise<IResponse> {
    const errors = req.validationErrors;
    if (errors.length > 0) {
      throw new BadRequestError(errors);
    }
    const categories = await this.getCategory.get({});
    return { status: 200, body: categories };
  }
}
