import {
  BadRequestError,
  IController,
  IResponse,
} from "@litee-blog/shared/presentation";
import { IChangePostData } from "../../domnain/useCases/change-post-data";
import { ChangePostDataDTO } from "../DTOs/change-post-data-dto";

export class ChangePostDataController implements IController {
  constructor(private readonly changePostData: IChangePostData) {}
  async handle(req: ChangePostDataDTO): Promise<IResponse> {
    const errors = req.validationErrors;
    if (errors && errors.length > 0) {
      throw new BadRequestError(errors);
    }
    const { accountId, content, postId, title } = req;
    await this.changePostData.change(postId, accountId, {
      content,
      title,
    });
    return { status: 200, body: "Post updated!" };
  }
}
