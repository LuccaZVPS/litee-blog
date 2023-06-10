export interface ISignIn {
  signIn(email: string, password: string): Promise<string | void>;
}
