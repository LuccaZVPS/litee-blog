import { NotFoundError } from "@litee-blog/shared/presentation";
import { IChangePostPicture } from "../domnain/useCases/change-post-picture";
import { IFindPostRepository } from "./protocols/find-post-repository";
import { IUpdatePostRepository } from "./protocols/update-post-repository";
import fs from "fs";
export class ChangePostPicture implements IChangePostPicture {
  constructor(
    private readonly findPostRepository: IFindPostRepository,
    private readonly updatePostRepository: IUpdatePostRepository
  ) {}
  async change(
    accountId: string,
    postId: string,
    newImagePath: string
  ): Promise<{ imageName: string }> {
    // eslint-disable-next-line no-useless-catch
    try {
      const postFound = await this.findPostRepository.find(
        { accountId, id: postId },
        1,
        false
      );
      if (postFound.posts.length !== 1) {
        throw new NotFoundError("Post not found");
      }
      const { imageName } = await this.updatePostRepository.update(postId, {
        imagePath: newImagePath,
        imageName: newImagePath.split("/")[newImagePath.split("/").length - 1],
      });
      fs.unlinkSync(postFound.posts[0].imagePath);
      return { imageName };
    } catch (e) {
      fs.unlinkSync(newImagePath);
      throw e;
    }
  }
}
