import { IPost } from "../entities/post";

export interface IFindPost {
  find(
    filters: IFindPostFilters,
    page: number
  ): Promise<{ posts: IPost[]; totalPages: number }>;
}
export interface IFindPostFilters {
  id?: string;
  accountId?: string;
  categoryId?: string;
}
