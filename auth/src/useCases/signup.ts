import { AccountCreated } from "@litee-blog/shared/infra/broker";
import {
  ISignUp,
  ISignUpDTO,
  ISignupResponse,
} from "../domain/useCases/signup";
import { accountCreatedPublisher } from "../events/publishers/account-created-publisher";
import { IFindAccountByEmail } from "./protocols/find-account-by-email";
import { IPasswordHasher } from "./protocols/password-hasher";
import { ISaveAccount } from "./protocols/save-account";
import { ISaveVerification } from "./protocols/save-verification";
import { ISecretGenerator } from "./protocols/secret-generator";
import { AnyHttpError } from "@litee-blog/shared/presentation";

export class SignUp implements ISignUp {
  constructor(
    private readonly account: ISaveAccount,
    private readonly verification: ISaveVerification,
    private readonly passwordHasher: IPasswordHasher,
    private readonly secretGenerator: ISecretGenerator,
    private readonly findAccountByEmail: IFindAccountByEmail
  ) {}
  async signup(account: ISignUpDTO): Promise<ISignupResponse> {
    const emailInUse = await this.findAccountByEmail.find(account.email);
    if (emailInUse && emailInUse._id) {
      throw new AnyHttpError(409, "Email already used!");
    }
    const { _id, email, name, password } = await this.account.save({
      ...account,
      password: this.passwordHasher.hash(account.password),
    });
    const secret = await this.verification.save(
      _id,
      this.secretGenerator.generate()
    );
    accountCreatedPublisher.publisher<AccountCreated>({
      _id,
      email,
      name,
      secret,
    });
    return { _id, email, name, password, secret };
  }
}
