import {
  EventNames,
  Event,
  Services,
  AccountVerified,
} from "@litee-blog/shared/infra/broker";
import { AccountRepository } from "../../infra/repositories/account-repository";
const accountRepository = new AccountRepository();
class AccountVerifiedListener extends Event {
  constructor() {
    super({ exchange: EventNames.AccountVerified, service: Services.Posts });
  }
  async listen() {
    this.listener(async (data: AccountVerified) => {
      await accountRepository.add(data._id, data.name);
    });
  }
}
export const accountverifiedListner = new AccountVerifiedListener();
