import { Event, Services, EventNames } from "@litee-blog/shared/infra/broker";

export class AccountUpdatedPublisher extends Event {
  constructor() {
    super({
      exchange: EventNames.AccountUpdated,
      service: Services.Account,
    });
  }
}
export const accountUpdatedPublisher = new AccountUpdatedPublisher();
