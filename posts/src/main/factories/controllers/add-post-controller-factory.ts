import { AddPostController } from "../../../presentation/controllers/add-post-controller";
import { addPostFactory } from "../useCases/add-post-factory";

export const addPostControllerFactory = () =>
  new AddPostController(addPostFactory());
