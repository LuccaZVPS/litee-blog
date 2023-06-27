import { NotFoundError } from "@litee-blog/shared/presentation";
import { IChangePicture } from "../domain/useCases/change-picture";
import { IFindAccountRepository } from "./protocol/find-account-repository";
import { IUpdateAccountRepository } from "./protocol/update-account-repository";
import fs from "fs";
import { accountUpdatedPublisher } from "../events/publishers/account-updated-publisher";
import { AccountUpdated } from "@litee-blog/shared/infra/broker";
export class ChangePicture implements IChangePicture {
  constructor(
    private readonly findAccountRepository: IFindAccountRepository,
    private readonly updateAccountRepository: IUpdateAccountRepository
  ) {}
  async change(accountId: string, newImagePath: string): Promise<void> {
    const account = await this.findAccountRepository.findOne(accountId);

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
    if (account.imagePath == "default.png") {
      return;
    }
    fs.unlinkSync(account.imagePath);
    await accountUpdatedPublisher.publisher<AccountUpdated>({
      _id: account._id,
      data: {
        imageName,
      },
    });
  }
}
