import { IAccount } from "../../domain/entities/account";
import { ISignUpDTO } from "../../domain/useCases/signup";
import {
  IFindAccount,
  IFindAccountParams,
} from "../../useCases/protocols/find-account";
import { ISaveAccount } from "../../useCases/protocols/save-account";
import {
  IUpdateAccountParams,
  IUpdateAccountRepository,
} from "../../useCases/protocols/update-account-repository";
import { accountModel } from "./models/account-model";

export class AccountRepository
  implements IUpdateAccountRepository, IFindAccount, ISaveAccount
{
  async findOne(id: string): Promise<IAccount | null> {
    return await accountModel.findOne({ _id: id });
  }
  async update(params: IUpdateAccountParams, _id: string): Promise<void> {
    await accountModel.updateOne(
      { _id },
      {
        $set: {
          ...params,
        },
      }
    );
  }
  async save(account: ISignUpDTO): Promise<IAccount> {
    const { email, name, password } = account;
    const accountCreated = await accountModel.create({
      email,
      name,
      password,
    });
    return accountCreated as unknown as IAccount;
  }
  async find(params: IFindAccountParams): Promise<void | IAccount> {
    return accountModel.findOne({
      ...params,
    });
  }
}
