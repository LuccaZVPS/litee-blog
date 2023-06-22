import {
  IsString,
  IsArray,
  ArrayMaxSize,
  ArrayMinSize,
  ArrayUnique,
  Length,
} from "class-validator";
export class AddPostDTO {
  constructor() {
    this.title = "";
    this.content = "";
    this.imageName = "";
    this.accountId = "";
    this.categories = [];
  }
  @IsString()
  @Length(3, 100)
  title: string;
  @IsString()
  @Length(300, 15000)
  content: string;
  imageName: string;
  accountId: string;
  @IsArray()
  @ArrayMaxSize(3)
  @ArrayMinSize(1)
  @ArrayUnique()
  categories: string[];
}
