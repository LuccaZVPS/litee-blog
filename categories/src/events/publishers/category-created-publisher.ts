import { Event, EventNames, Services } from "@litee-blog/shared/infra/broker";

class CategoryCreatedPubliser extends Event {
  constructor() {
    super({
      exchange: EventNames.CategoryCreated,
      service: Services.Categories,
    });
  }
}
export const categoryCreatedPubliser = new CategoryCreatedPubliser();
