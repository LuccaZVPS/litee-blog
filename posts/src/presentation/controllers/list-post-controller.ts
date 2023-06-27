import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { IFindPost } from "../../domnain/useCases/find-post";
import { ListPostDTO } from "../DTOs/list-post-dto";
import { BadRequestError } from "@litee-blog/shared/presentation";

export class ListPostController implements IController {
  constructor(private readonly findPosts: IFindPost) {}
  async handle(req: ListPostDTO): Promise<IResponse> {
    const errors = req.validationErrors;
    if (errors && errors.length > 0) {
      throw new BadRequestError(errors);
    }
    const { page } = req;
    const { posts, totalPages } = await this.findPosts.find(
      {
        accountId: req.ownerId,
        id: req.id,
        categoryId: req.categoryId,
      },
      page
    );
    return { status: 200, body: { posts, totalPages } };
  }
}
