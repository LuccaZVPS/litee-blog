import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { ISignIn } from "../../domain/useCases/signin";
import {
  BadRequestError,
  Unauthorized,
} from "@litee-blog/shared/presentation/errors";
import { SignInDTO } from "./DTOs/signin-dto";

export class SignInController implements IController {
  constructor(private readonly authentication: ISignIn) {}
  async handle(req: SignInDTO): Promise<IResponse> {
    const errors = req.validationErrors;
    if (errors && errors.length > 0) {
      throw new BadRequestError(errors);
    }
    const { email, password } = req;
    const jwtToken = await this.authentication.signIn(email, password);
    if (!jwtToken) {
      throw new Unauthorized("Unauthrozized");
    }
    const JwtCookie = {
      name: "jwt",
      value: jwtToken,
    };
    return { status: 200, body: "Logged in!", cookies: [JwtCookie] };
  }
}
