import { SignInController } from "../../../presentation/controllers/signin-controller";
import { makeSignIn } from "../useCases/siginin-factory";

export const makeSigninController = () => {
  return new SignInController(makeSignIn());
};
