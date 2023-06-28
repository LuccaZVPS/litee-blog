export interface IChangeName {
  change(accountId: string, newName: string): Promise<void>;
}
