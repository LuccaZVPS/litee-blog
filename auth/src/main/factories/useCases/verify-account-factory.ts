import { VerificationRepository } from "../../../infra/database/repositories/verification-repository";
import { VerifyAccount } from "../../../useCases/verify-account";

export const makeVerifyAccount = () => {
  return new VerifyAccount(new VerificationRepository());
};
