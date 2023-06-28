import {
  AccountVerified,
  Event,
  EventNames,
  Services,
} from "@litee-blog/shared/infra/broker";
import { AccountRepository } from "../../infra/mongo/repositories/account-repository";
const accountRepository = new AccountRepository();
export class AccountVerifiedListener extends Event {
  constructor() {
    super({
      exchange: EventNames.AccountVerified,
      service: Services.Auth,
    });
  }
  async listen() {
    await this.listener(async (accountData: AccountVerified) => {
      await accountRepository.save({
        ...accountData,
      });
    });
  }
}
export const accountVerifiedListener = new AccountVerifiedListener();
