import { IsUUID } from "class-validator";

export class DeleteCategoryDTO {
  constructor() {
    this.id = "";
  }
  @IsUUID()
  id: string;
}
