import { DTO } from "@litee-blog/shared/presentation";
import { IsString, Length } from "class-validator";
export class ChangeNameDTO extends DTO {
  constructor() {
    super();
    this.name = "";
  }
  @IsString()
  @Length(3, 30)
  name: string;
}
