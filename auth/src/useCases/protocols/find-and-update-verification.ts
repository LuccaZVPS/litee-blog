export interface IFindAndUpdateVerification {
  update(id: string, secret: string): Promise<boolean>;
}
