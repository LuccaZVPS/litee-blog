import { PostRepository } from "../../../infra/repositories/post-repository";
import { FindPost } from "../../../useCases/find-post";

export const findPostFactory = () => {
  return new FindPost(new PostRepository());
};
