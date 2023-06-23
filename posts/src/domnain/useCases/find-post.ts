import { IPost } from "../entities/post";

export interface IFindPost {
  find(): Promise<{ posts: IPost[]; totalPages: number }>;
}
export interface IFindPostFilters {
  id?: string;
  accountId?: string;
  categoryId?: string;
}
