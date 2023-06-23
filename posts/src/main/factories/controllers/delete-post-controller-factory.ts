import { DeletePostController } from "../../../presentation/controllers/delete-post-controller";
import { deletePostFactory } from "../useCases/delete-post-factory";

export const deletePostControllerFactory = () => {
  return new DeletePostController(deletePostFactory());
};
