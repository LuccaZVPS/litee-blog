import {
  BadRequestError,
  IController,
  IResponse,
} from "@litee-blog/shared/presentation";
import { IChangePostPicture } from "../../domnain/useCases/change-post-picture";
import { ChangePostPictureDTO } from "../DTOs/change-post-picture-dto";

export class ChangePostPictureController implements IController {
  constructor(private readonly changePostPicture: IChangePostPicture) {}
  async handle(req: ChangePostPictureDTO): Promise<IResponse> {
    const errors = req.validationErrors;
    if (errors && errors.length > 0) {
      throw new BadRequestError(errors);
    }
    const { imageName } = await this.changePostPicture.change(
      req.accountId,
      req.postId,
      req.file.filename
    );
    return { status: 200, body: { imageName } };
  }
}
