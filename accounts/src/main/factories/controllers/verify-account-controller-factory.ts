import { VerifyAccountController } from "../../../presentation/controllers/verify-account-controller";
import { makeVerifyAccount } from "../useCases/verify-account-factory";

export const makeVerifyAccountController = () => {
  return new VerifyAccountController(makeVerifyAccount());
};
