import {
  EventNames,
  AccountCreated,
  Event,
  Services,
} from "@litee-blog/shared/infra/broker";
import { AccountRepository } from "../../infra/repositories/account-repository";
const accountRepository = new AccountRepository();
class AccountCreatedListener extends Event {
  constructor() {
    super({ exchange: EventNames.AccountCreated, service: Services.Posts });
  }
  async listen() {
    this.listener(async (data: AccountCreated) => {
      await accountRepository.add(data._id, data.name);
    });
  }
}
export const accountCreatedListner = new AccountCreatedListener();
