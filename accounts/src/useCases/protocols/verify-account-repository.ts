export interface IVerifyAccountRepository {
  verify(id: string): Promise<void>;
}
