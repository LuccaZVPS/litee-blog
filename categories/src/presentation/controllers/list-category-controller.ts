import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { IGetCategory } from "../../domain/useCases/get-category";
export class ListCategoryController implements IController {
  constructor(private readonly getCategory: IGetCategory) {}
  async handle(): Promise<IResponse> {
    const categories = await this.getCategory.get({});
    return { status: 200, body: categories };
  }
}
