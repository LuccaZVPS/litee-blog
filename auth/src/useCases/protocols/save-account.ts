import { IAccount } from "../../domain/entities/account";
import { ISignUpDTO } from "../../domain/useCases/signup";

export interface ISaveAccount {
  save(account: ISignUpDTO): Promise<IAccount>;
}
