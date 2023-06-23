import { DTO } from "@litee-blog/shared/presentation";
import {
  IsEmail,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from "class-validator";
export class VerifyAccountDTO extends DTO {
  constructor() {
    super();
    this.id = "";
    this.secret = "";
  }
  @IsString()
  @IsUUID()
  id: string;
  @IsString()
  @MaxLength(50)
  @MinLength(50)
  secret: string;
}
