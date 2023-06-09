import { IAccount } from "../../../domain/entities/account";
import { ISignUpDTO } from "../../../domain/useCases/signup";
import { ISaveAccount } from "../../../useCases/protocols/save-account";
import { accountModel } from "../models/account-model";

export class AccountRepository implements ISaveAccount {
  async save(account: ISignUpDTO): Promise<IAccount> {
    const { _id, email, name, password } = await accountModel.create({
      email: account.email,
      name: account.name,
      password: account.password,
    });
    return { _id, email, name, password } as unknown as IAccount;
  }
}
