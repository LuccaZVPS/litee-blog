import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { ISignUp, ISignUpDTO } from "../../domain/useCases/signup";
import { amqp } from "../..";
import { EventNames, AccountCreated } from "@litee-blog/shared/infra/broker";
import { AnyHttpError } from "@litee-blog/shared/presentation/errors";
export class SignUpController implements IController {
  constructor(private readonly createAccount: ISignUp) {}
  async handle(data: ISignUpDTO): Promise<IResponse> {
    const account = await this.createAccount.signup(data);
    if (!account) {
      throw new AnyHttpError(409, "Email already in use.");
    }
    const { _id, email, name, secret } = account;
    amqp.publish<AccountCreated>(EventNames.AccountCreated, {
      _id,
      email,
      name,
      secret,
    });
    return { status: 201, body: "Account created!" };
  }
}
