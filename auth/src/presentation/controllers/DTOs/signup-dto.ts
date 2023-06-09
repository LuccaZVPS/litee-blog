import { IsEmail, IsString, Length } from "class-validator";
export class SignUpDTO {
  constructor() {
    this.email = "";
    this.name = "";
    this.password = "";
  }
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @Length(3, 30)
  name: string;
  @IsString()
  @Length(8, 30)
  password: string;
}
