import { IAccount } from "../../../domain/entities/account";
import { ISignUpDTO } from "../../../domain/useCases/signup";
import { IFindAccountByEmail } from "../../../useCases/protocols/find-account-by-email";
import { ISaveAccount } from "../../../useCases/protocols/save-account";
import { accountModel } from "../models/account-model";

export class AccountRepository implements ISaveAccount, IFindAccountByEmail {
  async save(account: ISignUpDTO): Promise<IAccount> {
    const { _id, email, name, password } = await accountModel.create({
      email: account.email,
      name: account.name,
      password: account.password,
    });
    return { _id, email, name, password } as unknown as IAccount;
  }
  async find(email: string): Promise<void | IAccount> {
    const account = await accountModel.findOne({ email });
    if (!account?._id) {
      return;
    }
    return {
      _id: account._id,
      email: account.email,
      name: account.name,
      password: account.password,
    };
  }
}
