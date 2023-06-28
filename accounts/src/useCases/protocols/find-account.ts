import { IAccount } from "../../domain/entities/account";

export interface IFindAccount {
  find(params: IFindAccountParams): Promise<IAccount | void>;
}
export interface IFindAccountParams {
  _id?: string;
  email?: string;
}
