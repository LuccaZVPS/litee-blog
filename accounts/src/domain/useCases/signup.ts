export interface ISignUp {
  signup(account: ISignUpDTO): Promise<ISignupResponse>;
}
export interface ISignUpDTO {
  name: string;
  password: string;
  email: string;
}
export interface ISignupResponse extends ISignUpDTO {
  secret: string;
  _id: string;
}
