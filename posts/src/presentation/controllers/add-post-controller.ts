/* eslint-disable no-useless-catch */
import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { AddPostDTO } from "../DTOs/add-post-dto";
import { IAddPost } from "../../domnain/useCases/add-post";
import fs from "fs";
import { BadRequestError } from "@litee-blog/shared/presentation";
export class AddPostController implements IController {
  constructor(private readonly addPost: IAddPost) {}
  async handle(req: AddPostDTO): Promise<IResponse> {
    try {
      const errors = req.validationErrors;
      if (errors.length > 0) {
        throw new BadRequestError(errors);
      }
      const { title, content, categories, accountId, file } = req;
      const imageNameFields = file.filename.split("/");
      const post = await this.addPost.add({
        title,
        categories,
        content,
        accountId,
        imageName: imageNameFields[imageNameFields.length - 1],
        imagePath: file.filename,
      });
      return { status: 201, body: { id: post.id } };
    } catch (e: unknown) {
      fs.unlinkSync(req.file.filename);
      throw e;
    }
  }
}
