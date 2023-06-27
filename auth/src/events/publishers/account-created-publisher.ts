import { Event, EventNames, Services } from "@litee-blog/shared/infra/broker";
class AccountCreatedPublisher extends Event {
  constructor() {
    super({
      exchange: EventNames.AccountCreated,
      service: Services.Auth,
    });
  }
}
export const accountCreatedPublisher = new AccountCreatedPublisher();
