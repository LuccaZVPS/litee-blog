import { IPosts } from "../entities/post";

export interface IAddPost {
  add(postDTO: IAddPostDTO): Promise<IPosts>;
}
export interface IAddPostDTO {
  title: string;
  content: string;
  categories: string[];
  accountId: string;
  imageName: string;
}
