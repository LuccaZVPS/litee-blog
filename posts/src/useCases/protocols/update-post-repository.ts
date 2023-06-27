import { IPost } from "../../domnain/entities/post";

export interface IUpdatePostRepository {
  update(id: string, filters: IUpdatePostRepositoryData): Promise<IPost>;
}
export interface IUpdatePostRepositoryData {
  title?: string;
  content?: string;
  imageName?: string;
  imagePath?: string;
}
