export interface ISaveVerification {
  save(accountId: string, randomSecret: string): Promise<string>;
}
