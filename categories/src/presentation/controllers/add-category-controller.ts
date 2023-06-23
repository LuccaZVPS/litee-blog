import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { IAddCategory } from "../../domain/useCases/add-category";
import { AddCategoryDTO } from "../DTOs/add-category-dto";

export class AddCategoryController implements IController {
  constructor(private readonly addCategory: IAddCategory) {}
  async handle(req: AddCategoryDTO): Promise<IResponse> {
    const { _id } = await this.addCategory.add(req.title, req.file.filename);
    return { status: 201, body: { id: _id } };
  }
}
