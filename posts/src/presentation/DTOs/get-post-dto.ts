import { IsUUID } from "class-validator";
export class GetPostDTO {
  constructor() {
    this.id = "";
  }
  @IsUUID()
  id?: string;
}
