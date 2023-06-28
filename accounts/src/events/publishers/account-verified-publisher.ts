import { Event, Services, EventNames } from "@litee-blog/shared/infra/broker";

export class AccountVerifiedPublisher extends Event {
  constructor() {
    super({
      exchange: EventNames.AccountVerified,
      service: Services.Account,
    });
  }
}
export const accountVerifiedPublisher = new AccountVerifiedPublisher();
