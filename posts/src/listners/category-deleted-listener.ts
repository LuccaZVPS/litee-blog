import { amqp } from "..";
import { EventNames, CategoryDeleted } from "@litee-blog/shared/infra/broker";
import { CategoryRepository } from "../infra/repositories/category-repository";
const categoryRepository = new CategoryRepository();
export class CategoryDeletedListener {
  static async listen() {
    amqp.listen(EventNames.CategoryDeleted, async (data: CategoryDeleted) => {
      await categoryRepository.delete(data.id);
    });
  }
}
