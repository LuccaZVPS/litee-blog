import { ListPostController } from "../../../presentation/controllers/list-post-controller";
import { findPostFactory } from "../useCases/find-post-factory";

export const listPostControllerFactory = () => {
  return new ListPostController(findPostFactory());
};
