import {
  EventNames,
  AccountCreated,
  Services,
  Event,
} from "@litee-blog/shared/infra/broker";
import { sendEmailVerification } from "../../useCases/send-verification-email";
class AccountCreatedListener extends Event {
  constructor() {
    super({
      exchange: EventNames.AccountCreated,
      service: Services.Mail,
    });
  }
  async listen() {
    this.listener(async (data: AccountCreated) => {
      const { _id, email, secret } = data;
      sendEmailVerification.send({ accountId: _id, email, secret });
    });
  }
}
export const accountCreatedListener = new AccountCreatedListener();
