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
      const {_id,email,name,password} = accountData
      await accountRepository.save({
        email,name,password,id:_id
      });
    });
  }
}
export const accountVerifiedListener = new AccountVerifiedListener();
