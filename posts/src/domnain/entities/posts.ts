import { ICategories } from "./categories";

export interface IPosts {
  id: string;
  title: string;
  content: string;
  categories: ICategories[];
}
