import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { IVerifyAccount } from "../../domain/useCases/verify-account";
import { ForbiddenError } from "@litee-blog/shared/presentation/errors";
export class VerifyAccountController implements IController {
  constructor(private readonly verifyAccount: IVerifyAccount) {}
  async handle(req: any): Promise<IResponse> {
    const { id, secret } = req;
    const verified = await this.verifyAccount.verify(id, secret);
    if (!verified) {
      throw new ForbiddenError("verification failed.");
    }
    return { status: 200, body: "Account verified" };
  }
}
