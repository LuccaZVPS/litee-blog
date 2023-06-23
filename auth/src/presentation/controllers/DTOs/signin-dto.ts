import { IsEmail, IsString, Length } from "class-validator";
import { DTO } from "@litee-blog/shared/presentation";
export class SignInDTO extends DTO {
  constructor() {
    super();
    this.email = "";
    this.password = "";
  }
  @IsEmail()
  email: string;
  @IsString()
  @Length(8, 30)
  password: string;
}
