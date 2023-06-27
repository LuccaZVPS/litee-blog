import {
  EventNames,
  Event,
  CategoryCreated,
  Services,
} from "@litee-blog/shared/infra/broker";
import { CategoryRepository } from "../../infra/repositories/category-repository";
const categoryRepository = new CategoryRepository();
class CategoryCreatedListener extends Event {
  constructor() {
    super({ exchange: EventNames.CategoryCreated, service: Services.Posts });
  }
  async listen() {
    this.listener(async (data: CategoryCreated) => {
      await categoryRepository.add(data.title, data.id);
    });
  }
}
export const categoryCreatedListener = new CategoryCreatedListener();
