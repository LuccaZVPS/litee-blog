import { DTO } from "@litee-blog/shared/presentation";
import { IsUUID } from "class-validator";
export class ChangePostPictureDTO extends DTO {
  constructor() {
    super();
    this.postId = "";
  }
  @IsUUID()
  postId: string;
  declare file: { filename: string };
}
