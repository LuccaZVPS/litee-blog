import { Event, EventNames, Services } from "@litee-blog/shared/infra/broker";

class CategoryDeleted extends Event {
  constructor() {
    super({
      exchange: EventNames.CategoryDeleted,
      service: Services.Categories,
    });
  }
}
export const categoryDeletedPubliser = new CategoryDeleted();
