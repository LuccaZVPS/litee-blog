import { VerificationRepository } from "../../../infra/mongo/verification-repository";
import { VerifyAccount } from "../../../useCases/verify-account";

export const makeVerifyAccount = () => {
  const verificationRepository = new VerificationRepository();
  return new VerifyAccount(verificationRepository, verificationRepository);
};
