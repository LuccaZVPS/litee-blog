import { BcryptAdapter } from "../../../infra/hasher/bcrypt-adapter";
import { AccountRepository } from "../../../infra/mongo/repositories/account-repository";
import { VerificationRepository } from "../../../infra/mongo/repositories/verification-repository";
import { GeneratePasswordAdapter } from "../../../infra/passwordGenerator/generate-password-adapter";
import { SignUp } from "../../../useCases/signup";

export const makeSignUp = () => {
  const accountRepository = new AccountRepository();
  return new SignUp(
    accountRepository,
    new VerificationRepository(),
    new BcryptAdapter(),
    new GeneratePasswordAdapter(),
    accountRepository
  );
};
