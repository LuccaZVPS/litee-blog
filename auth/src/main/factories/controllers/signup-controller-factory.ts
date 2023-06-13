import { SignUpController } from "../../../presentation/controllers/signup-controller";
import { makeSignUp } from "../useCases/signup-factory";

export const makeSignUpController = () => {
  return new SignUpController(makeSignUp());
};
