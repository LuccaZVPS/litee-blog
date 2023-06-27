import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { ISignUp } from "../../domain/useCases/signup";
import { BadRequestError } from "@litee-blog/shared/presentation/errors";
import { SignUpDTO } from "./DTOs/signup-dto";
export class SignUpController implements IController {
  constructor(private readonly createAccount: ISignUp) {}
  async handle(data: SignUpDTO): Promise<IResponse> {
    const errors = data.validationErrors;
    if (errors && errors.length > 0) {
      throw new BadRequestError(errors);
    }
    await this.createAccount.signup(data);

    return { status: 201, body: "Account created!" };
  }
}
