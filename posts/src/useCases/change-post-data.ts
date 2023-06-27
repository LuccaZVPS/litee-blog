import { NotFoundError } from "@litee-blog/shared/presentation";
import {
  IChangePostData,
  IChangePostDataParams,
} from "../domnain/useCases/change-post-data";
import { IFindPostRepository } from "./protocols/find-post-repository";
import { IUpdatePostRepository } from "./protocols/update-post-repository";

export class ChangePostData implements IChangePostData {
  constructor(
    private readonly findPostRepository: IFindPostRepository,
    private readonly updatePostRepository: IUpdatePostRepository
  ) {}
  async change(
    postId: string,
    accountId: string,
    data: IChangePostDataParams
  ): Promise<void> {
    const postFound = await this.findPostRepository.find(
      { accountId, id: postId },
      1,
      false
    );
    if (postFound.posts.length !== 1) {
      throw new NotFoundError("Post not found");
    }
    await this.updatePostRepository.update(postId, {
      ...data,
    });
  }
}
