import {
  IsEmail,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from "class-validator";
export class VerifyAccountDTO {
  constructor() {
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
