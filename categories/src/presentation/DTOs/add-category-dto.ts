import { IsString } from "class-validator";
export class AddCategoryDTO {
  constructor() {
    this.title = "";
  }
  @IsString()
  title: string;
  declare file: { filename: string };
}
