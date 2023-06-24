import { amqp } from "..";
import { EventNames, CategoryUpdated } from "@litee-blog/shared/infra/broker";
import { CategoryRepository } from "../infra/repositories/category-repository";
const categoryRepository = new CategoryRepository();
export class CategoryUpdatedListener {
  static async listen() {
    amqp.listen(EventNames.CategoryUpdated, async (data: CategoryUpdated) => {
      await categoryRepository.update(data.id, data.title);
    });
  }
}
