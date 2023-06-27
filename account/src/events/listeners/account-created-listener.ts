import {
  EventNames,
  AccountCreated,
  Event,
  Services,
} from "@litee-blog/shared/infra/broker";
import { AccountRepository } from "../../infra/mongo/account-repository";
const accountRepository = new AccountRepository();
class AccountCreatedListener extends Event {
  constructor() {
    super({
      exchange: EventNames.AccountCreated,
      service: Services.Account,
    });
  }
  async listen() {
    await this.listener(async (data: AccountCreated) => {
      await accountRepository.add(data.name, data._id);
    });
  }
}
export const accountCreatedListener = new AccountCreatedListener();
