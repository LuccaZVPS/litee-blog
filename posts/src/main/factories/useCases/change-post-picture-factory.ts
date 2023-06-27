import { PostRepository } from "../../../infra/repositories/post-repository";
import { ChangePostPicture } from "../../../useCases/change-post-picture";

export const changePostPictureFactory = () => {
  const postRepository = new PostRepository();
  return new ChangePostPicture(postRepository, postRepository);
};
