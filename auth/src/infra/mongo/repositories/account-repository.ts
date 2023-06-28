import { IAccount } from "../../../domain/entities/account";
import { IFindAccountByEmail } from "../../../useCases/protocols/find-account-by-email";
import { accountModel } from "../models/account-model";

export class AccountRepository implements IFindAccountByEmail {
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
  async update(params: IUpdateAccountParams) {
    await accountModel.updateOne({ _id: params._id }, { ...params.data });
  }
}

interface IUpdateAccountParams {
  _id: string;
  data: {
    name?: string;
    email?: string;
    password?: string;
  };
}
