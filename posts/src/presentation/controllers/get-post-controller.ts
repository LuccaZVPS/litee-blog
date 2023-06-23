import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { IFindPost } from "../../domnain/useCases/find-post";
import { GetPostDTO } from "../DTOs/get-post-dto";

export class GetPostController implements IController {
  constructor(private readonly findPost: IFindPost) {}
  async handle(req: GetPostDTO): Promise<IResponse> {
    const { posts } = await this.findPost.find({ id: req.id }, 1, true);
    return { status: 200, body: { post: posts[0] } };
  }
}
