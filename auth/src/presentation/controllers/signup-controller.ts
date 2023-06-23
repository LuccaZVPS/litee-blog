import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { ISignUp } from "../../domain/useCases/signup";
import { amqp } from "../..";
import { EventNames, AccountCreated } from "@litee-blog/shared/infra/broker";
import {
  AnyHttpError,
  BadRequestError,
} from "@litee-blog/shared/presentation/errors";
import { SignUpDTO } from "./DTOs/signup-dto";
export class SignUpController implements IController {
  constructor(private readonly createAccount: ISignUp) {}
  async handle(data: SignUpDTO): Promise<IResponse> {
    const errors = data.validationErrors;
    if (errors.length > 0) {
      throw new BadRequestError(errors);
    }
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
