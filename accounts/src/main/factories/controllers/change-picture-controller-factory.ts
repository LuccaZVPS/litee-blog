import { ChangePictureController } from "../../../presentation/controllers/change-picture-controller";
import { changePictureFactory } from "../useCases/change-picture-factory";

export const changePictureControllerFactory = () => {
  return new ChangePictureController(changePictureFactory());
};
