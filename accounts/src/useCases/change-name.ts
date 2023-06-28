import { AccountUpdated } from "@litee-blog/shared/infra/broker";
import { IChangeName } from "../domain/useCases/change-name";
import { accountUpdatedPublisher } from "../events/publishers/account-updated-publisher";
import { IUpdateAccountRepository } from "./protocols/update-account-repository";

export class ChangeName implements IChangeName {
  constructor(
    private readonly updateAccountRepository: IUpdateAccountRepository
  ) {}
  async change(accountId: string, newName: string): Promise<void> {
    await this.updateAccountRepository.update({ name: newName }, accountId);
    await accountUpdatedPublisher.publisher<AccountUpdated>({
      _id: accountId,
      data: { name: newName },
    });
  }
}
