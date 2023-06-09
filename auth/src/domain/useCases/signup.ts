export interface ISignUp {
  signup(account: IAccountDTO): Promise<void>;
}
interface IAccountDTO {
  name: string;
  password: string;
  email: string;
}
