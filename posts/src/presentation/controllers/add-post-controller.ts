import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { AddPostDTO } from "../DTOs/add-post-dto";
import { IAddPost } from "../../domnain/useCases/add-post";
export class AddPostController implements IController {
  constructor(private readonly addPost: IAddPost) {}
  async handle(req: AddPostDTO): Promise<IResponse> {
    const { title, content, categories, accountId, file } = req;
    const post = await this.addPost.add({
      title,
      categories,
      content,
      accountId,
      imageName: file.fileName,
    });
    return { status: 201, body: { id: post.id } };
  }
}
