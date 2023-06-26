import { EventNames, AccountCreated } from "@litee-blog/shared/infra/broker";
import { amqp } from "..";
import { AccountRepository } from "../infra/mongo/account-repository";
const accountRepository = new AccountRepository();
export class AccountCreatedListener {
  static listen() {
    amqp.listen(EventNames.AccountCreated, async (data: AccountCreated) => {
      console.log("a");
      await accountRepository.add(data.name, data._id);
    });
  }
}
