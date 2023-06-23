import { IPost } from "../../domnain/entities/post";

export interface IFindPostRepository {
  find(filters: IFindPostFilters): Promise<IPost[]>;
}
export interface IFindPostFilters {
  id?: string;
  accountId?: string;
}
