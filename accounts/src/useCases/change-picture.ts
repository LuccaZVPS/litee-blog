import { NotFoundError } from "@litee-blog/shared/presentation";
import { IChangePicture } from "../domain/useCases/change-picture";
import { IUpdateAccountRepository } from "./protocols/update-account-repository";
import fs from "fs";
import { accountUpdatedPublisher } from "../events/publishers/account-updated-publisher";
import { AccountUpdated } from "@litee-blog/shared/infra/broker";
import { IFindAccount } from "./protocols/find-account";
import {resolve} from 'path'
const UPLOADS_DIRECTORY = resolve(__dirname,"../../uploads")
export class ChangePicture implements IChangePicture {
  constructor(
    private readonly findAccountRepository: IFindAccount,
    private readonly updateAccountRepository: IUpdateAccountRepository
  ) {}
  async change(accountId: string, newImagePath: string): Promise<void> {
    const account = await this.findAccountRepository.find({ _id: accountId });

    if (!account) {
      throw new NotFoundError("Account not found");
    }
    const imageName =
      newImagePath.split("/")[newImagePath.split("/").length - 1];
    await this.updateAccountRepository.update(
      {
        imagePath: newImagePath,
        imageName,
      },
      accountId
    );
    if (account.imageName == "default.png") {
      return;
    }
    fs.unlinkSync(UPLOADS_DIRECTORY + "/" + account.imageName);
    await accountUpdatedPublisher.publisher<AccountUpdated>({
      _id: account.id,
      data: {
        imageName,
      },
    });
  }
}
