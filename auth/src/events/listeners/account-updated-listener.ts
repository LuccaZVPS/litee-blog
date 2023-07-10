import {
  AccountUpdated,
  Event,
  EventNames,
  Services,
} from "@litee-blog/shared/infra/broker";
import { AccountRepository } from "../../infra/database/repositories/account-repository";
const accountRepository = new AccountRepository();
export class AccountUpdatedListener extends Event {
  constructor() {
    super({
      exchange: EventNames.AccountUpdated,
      service: Services.Auth,
    });
  }
  async listen() {
    await this.listener(async (accountData: AccountUpdated) => {
      await accountRepository.update({
        id: accountData._id,
        data: accountData.data,
      });
    });
  }
}
export const accountUpdatedListener = new AccountUpdatedListener();
