import { IAccount } from "../../domain/entities/account";

export interface IFindAccountRepository {
  findOne(id: string): Promise<IAccount | null>;
}
