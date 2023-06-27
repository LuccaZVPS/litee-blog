import { IPost } from "../domnain/entities/post";
import { IAddPost, IAddPostDTO } from "../domnain/useCases/add-post";
import { IAddPostRepository } from "./protocols/add-post-repository";
import { IFindCategoriesRepository } from "./protocols/find-categories";
import { BadRequestError } from "@litee-blog/shared/presentation/errors";
export class AddPost implements IAddPost {
  constructor(
    private readonly findCategoriesRepository: IFindCategoriesRepository,
    private readonly addPostRepository: IAddPostRepository
  ) {}
  async add(postDTO: IAddPostDTO): Promise<IPost> {
    const categoriesExist = await this.findCategoriesRepository.find(
      postDTO.categories
    );
    if (!categoriesExist) {
      throw new BadRequestError([{ message: "Invalid categories provided" }]);
    }
    return await this.addPostRepository.add(postDTO);
  }
}
