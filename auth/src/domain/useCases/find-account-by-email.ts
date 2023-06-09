import { IAccount } from "../entities/account";

export interface IFindAccountByEmail {
  find(email: string): Promise<IAccount | void>;
}
