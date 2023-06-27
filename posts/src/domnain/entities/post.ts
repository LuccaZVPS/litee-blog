import { ICategory } from "./category";

export interface IPost {
  id: string;
  title: string;
  content: string;
  categories: ICategory[];
  imagePath: string;
  imageName: string;
  account: {
    id: string;
    name: string;
  };
}
