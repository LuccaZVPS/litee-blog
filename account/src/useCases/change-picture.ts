import { NotFoundError } from "@litee-blog/shared/presentation";
import { IChangePicture } from "../domain/useCases/change-picture";
import { IFindAccountRepository } from "./protocol/find-account-repository";
import { IUpdateAccountRepository } from "./protocol/update-account-repository";
import fs from "fs";
export class ChangePicture implements IChangePicture {
  constructor(
    private readonly findAccountRepository: IFindAccountRepository,
    private readonly updateAccountRepository: IUpdateAccountRepository
  ) {}
  async change(accountId: string, newImagePath: string): Promise<void> {
    const account = await this.findAccountRepository.find({ _id: accountId });
    if (account.length !== 1) {
      throw new NotFoundError("Account not found");
    }
    await this.updateAccountRepository.update({
      where: { _id: accountId },
      imagePath: newImagePath,
      imageName: newImagePath.split("/")[newImagePath.split("/").length - 1],
    });
    fs.unlinkSync(account[0].imagePath);
    return;
  }
}
