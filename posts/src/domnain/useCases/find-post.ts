import { IPost } from "../entities/post";

export interface IFindPost {
  find(
    filters: IFindPostFilters,
    page: number,
    full?: boolean
  ): Promise<{ posts: IPost[]; totalPages: number }>;
}
export interface IFindPostFilters {
  id?: string;
  accountId?: string;
  categoryId?: string;
}
