export interface IFindCategoriesRepository {
  find(categories: string[]): Promise<boolean>;
}
