export interface IVerifyAccount {
  verify(id: string, secret: string): Promise<void>;
}
