import {
  EventNames,
  Event,
  CategoryDeleted,
  Services,
} from "@litee-blog/shared/infra/broker";
import { CategoryRepository } from "../infra/repositories/category-repository";
const categoryRepository = new CategoryRepository();
class CategoryDeletedListener extends Event {
  constructor() {
    super({ exchange: EventNames.CategoryDeleted, service: Services.Posts });
  }
  async listen() {
    this.listener(async (data: CategoryDeleted) => {
      await categoryRepository.delete(data.id);
    });
  }
}
export const categoryDeletedListener = new CategoryDeletedListener();
