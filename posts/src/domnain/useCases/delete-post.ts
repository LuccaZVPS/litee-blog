export interface IDeletePost {
  delete(postId: string, accountId: string): Promise<void>;
}
