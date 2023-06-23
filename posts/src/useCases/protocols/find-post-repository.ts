import { IPost } from "../../domnain/entities/post";
import { IFindPostFilters } from "../../domnain/useCases/find-post";

export interface IFindPostRepository {
  find(
    filters: IFindPostFilters,
    page: number
  ): Promise<{ posts: IPost[]; totalPages: number }>;
}
