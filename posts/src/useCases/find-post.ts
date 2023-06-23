import { IPost } from "../domnain/entities/post";
import { IFindPost, IFindPostFilters } from "../domnain/useCases/find-post";
import { IFindPostRepository } from "./protocols/find-post-repository";

export class FindPost implements IFindPost {
  constructor(private readonly findPostsRepository: IFindPostRepository) {}
  async find(
    filters: IFindPostFilters,
    page: number
  ): Promise<{ posts: IPost[]; totalPages: number }> {
    return await this.findPostsRepository.find(filters, page);
  }
}
