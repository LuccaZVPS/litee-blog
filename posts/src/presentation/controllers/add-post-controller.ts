/* eslint-disable no-useless-catch */
import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { AddPostDTO } from "../DTOs/add-post-dto";
import { IAddPost } from "../../domnain/useCases/add-post";
import fs from "fs";
export class AddPostController implements IController {
  constructor(private readonly addPost: IAddPost) {}
  async handle(req: AddPostDTO): Promise<IResponse> {
    try {
      const { title, content, categories, accountId, file } = req;
      const filenameContent = file.filename.split("/");
      const post = await this.addPost.add({
        title,
        categories,
        content,
        accountId,
        imageName: filenameContent[filenameContent.length - 1],
      });
      return { status: 201, body: { id: post.id } };
    } catch (e: unknown) {
      fs.unlinkSync(req.file.filename);
      throw e;
    }
  }
}
