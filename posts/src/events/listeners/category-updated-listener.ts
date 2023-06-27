import {
  EventNames,
  Event,
  CategoryUpdated,
  Services,
} from "@litee-blog/shared/infra/broker";
import { CategoryRepository } from "../../infra/repositories/category-repository";
const categoryRepository = new CategoryRepository();
class CategoryUpdatedListener extends Event {
  constructor() {
    super({ exchange: EventNames.CategoryUpdated, service: Services.Posts });
  }
  async listen() {
    this.listener(async (data: CategoryUpdated) => {
      await categoryRepository.update(data.id, data.title);
    });
  }
}
export const categoryUpdatedListener = new CategoryUpdatedListener();
