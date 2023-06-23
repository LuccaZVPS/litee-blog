import { DTO } from "@litee-blog/shared/presentation";
import { IsUUID } from "class-validator";

export class DeleteCategoryDTO extends DTO {
  constructor() {
    super();
    this.id = "";
  }
  @IsUUID()
  id: string;
}
