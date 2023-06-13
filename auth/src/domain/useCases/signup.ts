export interface ISignUp {
  signup(account: ISignUpDTO): Promise<ISignupResponse | void>;
}
export interface ISignUpDTO {
  name: string;
  password: string;
  email: string;
}
export interface ISignupResponse extends ISignUpDTO {
  secret: string;
  _id;
}
