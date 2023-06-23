import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { IFindPost } from "../../domnain/useCases/find-post";
import { FindPostDTO } from "../DTOs/find-post-dto";

export class FindPostController implements IController {
  constructor(private readonly findPosts: IFindPost) {}
  async handle(req: FindPostDTO): Promise<IResponse> {
    const { page } = req;

    const { posts, totalPages } = await this.findPosts.find({}, page);
    return { status: 200, body: { posts, totalPages } };
  }
}
