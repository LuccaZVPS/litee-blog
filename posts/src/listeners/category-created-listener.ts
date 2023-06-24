import { amqp } from "..";
import { EventNames, CategoryCreated } from "@litee-blog/shared/infra/broker";
import { CategoryRepository } from "../infra/repositories/category-repository";
const categoryRepository = new CategoryRepository();
export class CategoryCreatedListener {
  static async listen() {
    amqp.listen(EventNames.CategoryCreated, async (data: CategoryCreated) => {
      await categoryRepository.add(data.title, data.id);
    });
  }
}
