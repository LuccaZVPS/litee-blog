import { IAccount } from "../../domain/entities/account";
import { IFindAccountRepository } from "../../useCases/protocol/find-account-repository";
import {
  IUpdateAccountParams,
  IUpdateAccountRepository,
} from "../../useCases/protocol/update-account-repository";
import { accountModel } from "./models/account-model";

export class AccountRepository
  implements IFindAccountRepository, IUpdateAccountRepository
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
  async add(name: string, _id: string) {
    // eslint-disable-next-line no-useless-catch
    try {
      await accountModel.create({
        _id,
        name,
        imageName: "default.png",
      });
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
