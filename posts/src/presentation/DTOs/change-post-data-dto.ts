import { DTO } from "@litee-blog/shared/presentation";
import { IsString, Length, IsUUID } from "class-validator";
export class ChangePostDataDTO extends DTO {
  constructor() {
    super();
    this.title = "";
    this.content = "";
    this.postId = "";
  }
  @IsString()
  @Length(3, 100)
  title: string;
  @IsString()
  @Length(300, 15000)
  content: string;
  @IsUUID()
  postId: string;
}
