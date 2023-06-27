import { ChangePostPictureController } from "../../../presentation/controllers/change-post-picture-controller";
import { changePostPictureFactory } from "../useCases/change-post-picture-factory";

export const changePostPictureControllerFactory = () => {
  return new ChangePostPictureController(changePostPictureFactory());
};
