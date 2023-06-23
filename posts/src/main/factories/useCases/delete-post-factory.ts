import { PostRepository } from "../../../infra/repositories/post-repository";
import { DeletePost } from "../../../useCases/delete-post";

export const deletePostFactory = () => {
  const postRepo = new PostRepository();
  return new DeletePost(postRepo, postRepo);
};
