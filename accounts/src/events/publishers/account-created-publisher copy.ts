import { Event, Services, EventNames } from "@litee-blog/shared/infra/broker";

export class AccountCreatedPublisher extends Event {
  constructor() {
    super({
      exchange: EventNames.AccountCreated,
      service: Services.Account,
    });
  }
}
export const accountCreatedPublisher = new AccountCreatedPublisher();
