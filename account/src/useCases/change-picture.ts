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
    // eslint-disable-next-line no-useless-catch
    try {
      const account = await this.findAccountRepository.findOne(accountId);

      if (!account) {
        throw new NotFoundError("Account not found");
      }
      await this.updateAccountRepository.update(
        {
          imagePath: newImagePath,
          imageName:
            newImagePath.split("/")[newImagePath.split("/").length - 1],
        },
        accountId
      );
      if (account.imagePath == "default.png") {
        return;
      }
      fs.unlinkSync(account.imagePath);
    } catch (e) {
      fs.unlinkSync(newImagePath);
      throw e;
    }
  }
}