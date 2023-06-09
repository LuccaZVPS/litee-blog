import { IAccount } from "../entities/account";

export interface ISignUp {
  signup(account: ISignUpDTO): Promise<ISignupResponse>;
}
export interface ISignUpDTO {
  name: string;
  password: string;
  email: string;
}
export interface ISignupResponse extends IAccount {
  secret: string;
}
