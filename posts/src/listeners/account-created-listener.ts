import { amqp } from "..";
import { EventNames, AccountCreated } from "@litee-blog/shared/infra/broker";
import { AccountRepository } from "../infra/repositories/account-repository";
const accountRepository = new AccountRepository();
export class AccountCreatedListener {
  static async listen() {
    amqp.listen(EventNames.AccountCreated, async (data: AccountCreated) => {
      await accountRepository.add(data._id, data.name);
    });
  }
}
