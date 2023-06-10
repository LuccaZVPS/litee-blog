import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { ISignIn } from "../domain/useCases/signin";
import { Unauthorized } from "@litee-blog/shared/presentation/errors";

export class SignInController implements IController {
  constructor(private readonly authentication: ISignIn) {}
  async handle(req: any): Promise<IResponse> {
    const { email, password } = req;
    const account = await this.authentication.signIn(email, password);
    if (!account) {
      throw new Unauthorized("Unauthrozized");
    }
    return { status: 200, body: "Logged in!" };
  }
}
