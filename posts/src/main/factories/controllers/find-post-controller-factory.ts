import { FindPostController } from "../../../presentation/controllers/find-post-controller";
import { findPostFactory } from "../useCases/find-post-factory";

export const findPostControllerFactory = () => {
  return new FindPostController(findPostFactory());
};
