import { VerificationRepository } from "../../../infra/mongo/repositories/verification-repository";
import { VerifyAccount } from "../../../useCases/verify-account";

export const makeVerifyAccount = () => {
  return new VerifyAccount(new VerificationRepository());
};
