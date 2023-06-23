import { DTO } from "@litee-blog/shared/presentation";
import { IsUUID, IsNotEmpty } from "class-validator";
export class DeletePostDTO extends DTO {
  constructor() {
    super();
    this.id = "";
    this.accountId = "";
  }
  @IsNotEmpty()
  @IsUUID()
  id: string;
  accountId: string;
}
