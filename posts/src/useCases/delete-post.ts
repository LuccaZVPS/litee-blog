import { NotFoundError } from "@litee-blog/shared/presentation/errors";
import { IDeletePost } from "../domnain/useCases/delete-post";
import { IDeletePostRepository } from "./protocols/delete-post-repository";
import { IFindPostRepository } from "./protocols/find-post-repository";

export class DeletePost implements IDeletePost {
  constructor(
    private readonly findPostRepository: IFindPostRepository,
    private readonly deletePostRepository: IDeletePostRepository
  ) {}
  async delete(postId: string, accountId: string): Promise<void> {
    const postFound = await this.findPostRepository.find({
      accountId,
      id: postId,
    });
    if (postFound.length == 0) {
      throw new NotFoundError("Post not found");
    }
    await this.deletePostRepository.delete(postFound[0].id);
  }
}
