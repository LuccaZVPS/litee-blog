import { ChangeNameController } from "../../../presentation/controllers/change-name-controller";
import { changeNameFactory } from "../useCases/change-name-factory";

export const changeNameControllerFactory = () => {
  return new ChangeNameController(changeNameFactory());
};
