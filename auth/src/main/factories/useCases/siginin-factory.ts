import { JwtAdapter } from "../../../infra/encrypter/jwt-adapter";
import { BcryptAdapter } from "../../../infra/hasher/bcrypt-adapter";
import { AccountRepository } from "../../../infra/mongo/repositories/account-repository";
import { SignIn } from "../../../useCases/signin";

export const makeSignIn = () => {
  return new SignIn(
    new AccountRepository(),
    new BcryptAdapter(),
    new JwtAdapter()
  );
};
