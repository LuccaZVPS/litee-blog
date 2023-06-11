import { IsEmail, IsString, Length } from "class-validator";

export class SignInDTO {
  constructor() {
    this.email = "";
    this.password = "";
  }
  @IsEmail()
  email: string;
  @IsString()
  @Length(8, 30)
  password: string;
}
