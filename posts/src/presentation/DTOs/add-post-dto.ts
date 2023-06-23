import {
  IsString,
  IsArray,
  ArrayMaxSize,
  ArrayMinSize,
  ArrayUnique,
  Length,
} from "class-validator";
import { DTO } from "@litee-blog/shared/presentation";
export class AddPostDTO extends DTO {
  constructor() {
    super();
    this.title = "";
    this.content = "";
    this.file = { filename: "" };
    this.accountId = "";
    this.categories = [];
  }
  @IsString()
  @Length(3, 100)
  title: string;
  @IsString()
  @Length(300, 15000)
  content: string;
  file: { filename: string };
  accountId: string;
  @IsArray()
  @ArrayMaxSize(3)
  @ArrayMinSize(1)
  @ArrayUnique()
  categories: string[];
}
