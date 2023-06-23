import { IPost } from "../entities/post";

export interface IAddPost {
  add(postDTO: IAddPostDTO): Promise<IPost>;
}
export interface IAddPostDTO {
  title: string;
  content: string;
  categories: string[];
  accountId: string;
  imagePath: string;
  imageName: string;
}
