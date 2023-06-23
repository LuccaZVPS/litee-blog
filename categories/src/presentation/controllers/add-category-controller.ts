import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { IAddCategory } from "../../domain/useCases/add-category";
import { AddCategoryDTO } from "../DTOs/add-category-dto";
import fs from "fs";
export class AddCategoryController implements IController {
  constructor(private readonly addCategory: IAddCategory) {}
  async handle(req: AddCategoryDTO): Promise<IResponse> {
    // eslint-disable-next-line no-useless-catch
    try {
      const { _id } = await this.addCategory.add(req.title, req.file.filename);
      return { status: 201, body: { id: _id } };
    } catch (e) {
      fs.unlinkSync(req.file.filename);
      throw e;
    }
  }
}