export interface IDeletePostRepository {
  delete(postId: string): Promise<void>;
}
