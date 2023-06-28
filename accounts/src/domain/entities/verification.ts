import { IAccount } from "./account";

export interface IVerification {
  _id: string;
  status: boolean;
  accountId: string;
  secret: string;
  account: IAccount;
}
