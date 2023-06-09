import { IAccount } from "./account";

export interface IRefreshToken {
  _id: string;
  refreshToken: string;
  userId: string;
  account: IAccount;
}
