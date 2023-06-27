import { ChangePostDataController } from "../../../presentation/controllers/change-post-data-controller";
import { changePostDataFactory } from "../useCases/change-post-data-factory";

export const changePostDataControllerFactory = () => {
  return new ChangePostDataController(changePostDataFactory());
};
