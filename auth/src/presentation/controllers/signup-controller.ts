import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { ISignUp, ISignUpDTO } from "../../domain/useCases/signup";
import { IFindAccountByEmail } from "../../domain/useCases/find-account-by-email";
import { AnyHttpError } from "@litee-blog/shared/presentation/errors";
import { amqp } from "../..";
import { EventNames, AccountCreated } from "@litee-blog/shared/infra/broker";
export class SignUpController implements IController {
  constructor(
    private readonly findByEmail: IFindAccountByEmail,
    private readonly createAccount: ISignUp
  ) {}
  async handle(data: ISignUpDTO): Promise<IResponse> {
    const accountExist = await this.findByEmail.find(data.email);
    if (accountExist) {
      throw new AnyHttpError(409, "Email already in use.");
    }
    const { _id, email, name, secret } = await this.createAccount.signup(data);
    amqp.publish<AccountCreated>(EventNames.AccountCreated, {
      _id,
      email,
      name,
      secret,
    });
    return { status: 201, body: "Account created!" };
  }
}
