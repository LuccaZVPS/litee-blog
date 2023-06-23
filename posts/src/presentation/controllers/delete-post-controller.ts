import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { IDeletePost } from "../../domnain/useCases/delete-post";
import { DeletePostDTO } from "../DTOs/delete-post-dto";

export class DeletePostController implements IController {
  constructor(private readonly deletePost: IDeletePost) {}
  async handle(req: DeletePostDTO): Promise<IResponse> {
    await this.deletePost.delete(req.id, req.accountId);

    return { status: 200, body: "Post deleted!" };
  }
}
