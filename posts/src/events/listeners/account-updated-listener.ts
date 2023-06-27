import {
  EventNames,
  Event,
  Services,
  AccountUpdated,
} from "@litee-blog/shared/infra/broker";
import { AccountRepository } from "../../infra/repositories/account-repository";
const accountRepository = new AccountRepository();
class AccountUpdatedListener extends Event {
  constructor() {
    super({ exchange: EventNames.AccountUpdated, service: Services.Posts });
  }
  async listen() {
    await this.listener(async (account: AccountUpdated) => {
      await accountRepository.update({
        id: account._id,
        data: { ...account.data },
      });
    });
  }
}
export const accountUpdatedListner = new AccountUpdatedListener();
