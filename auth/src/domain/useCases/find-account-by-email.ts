import { IAccount } from "../entities/account";

export interface IFindAccountByEmail {
  find(): Promise<IAccount>;
}
