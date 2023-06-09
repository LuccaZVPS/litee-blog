import { IAccount } from "../../domain/entities/account";

export interface IFindAccountByEmail {
  find(email: string): Promise<IAccount | void>;
}
