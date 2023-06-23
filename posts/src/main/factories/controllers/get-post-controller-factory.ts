import { GetPostController } from "../../../presentation/controllers/get-post-controller";
import { findPostFactory } from "../useCases/find-post-factory";

export const getPostControllerFactory = () => {
  return new GetPostController(findPostFactory());
};
