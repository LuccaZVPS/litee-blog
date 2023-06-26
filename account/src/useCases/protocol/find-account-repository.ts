import { IAccount } from "../../domain/entities/account";

export interface IFindAccountRepository {
  find(filters: IFindAccountRepositoryFilters): Promise<IAccount[]>;
}
export interface IFindAccountRepositoryFilters {
  _id?: string;
  name?: string;
}
