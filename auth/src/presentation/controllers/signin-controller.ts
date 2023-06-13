import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { ISignIn } from "../../domain/useCases/signin";
import { Unauthorized } from "@litee-blog/shared/presentation/errors";

export class SignInController implements IController {
  constructor(private readonly authentication: ISignIn) {}
  async handle(req: any): Promise<IResponse> {
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
