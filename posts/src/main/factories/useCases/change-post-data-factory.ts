import { PostRepository } from "../../../infra/repositories/post-repository";
import { ChangePostData } from "../../../useCases/change-post-data";

export const changePostDataFactory = () => {
  const postRepository = new PostRepository();
  return new ChangePostData(postRepository, postRepository);
};
