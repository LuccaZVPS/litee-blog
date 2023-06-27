import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { IFindPost } from "../../domnain/useCases/find-post";
import { GetPostDTO } from "../DTOs/get-post-dto";
import { BadRequestError } from "@litee-blog/shared/presentation";

export class GetPostController implements IController {
  constructor(private readonly findPost: IFindPost) {}
  async handle(req: GetPostDTO): Promise<IResponse> {
    const errors = req.validationErrors;
    if (errors && errors.length > 0) {
      throw new BadRequestError(errors);
    }
    const { posts } = await this.findPost.find({ id: req.id }, 1, true);
    return { status: 200, body: { post: posts[0] } };
  }
}
