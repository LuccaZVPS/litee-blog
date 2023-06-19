import { ICategories } from "./categories";

export interface IPosts {
  _id: string;
  title: string;
  content: string;
  categories: ICategories[];
}
