export interface IDeleteCategory {
  delete(id: string): Promise<void>;
}
