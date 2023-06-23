import { IsString, Length } from "class-validator";
import { DTO } from "@litee-blog/shared/presentation";
export class AddCategoryDTO extends DTO {
  constructor() {
    super();
    this.title = "";
  }
  @IsString()
  @Length(1, 20)
  title: string;
  declare file: { filename: string };
}
