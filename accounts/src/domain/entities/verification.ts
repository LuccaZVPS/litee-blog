import { IAccount } from "./account";

export interface IVerification {
  id: string;
  status: boolean;
  accountId: string;
  secret: string;
  account: IAccount;
}
