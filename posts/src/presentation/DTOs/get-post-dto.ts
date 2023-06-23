import { DTO } from "@litee-blog/shared/presentation";
import { IsUUID } from "class-validator";
export class GetPostDTO extends DTO {
  constructor() {
    super();
    this.id = "";
  }
  @IsUUID()
  id?: string;
}
