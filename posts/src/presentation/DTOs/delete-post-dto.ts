import { IsUUID, IsNotEmpty } from "class-validator";
export class DeletePostDTO {
  constructor() {
    this.id = "";
    this.accountId = "";
  }
  @IsNotEmpty()
  @IsUUID()
  id: string;
  accountId: string;
}
