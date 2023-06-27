import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { IVerifyAccount } from "../../domain/useCases/verify-account";
import {
  BadRequestError,
  ForbiddenError,
} from "@litee-blog/shared/presentation/errors";
import { VerifyAccountDTO } from "./DTOs/verify-account-dto";
export class VerifyAccountController implements IController {
  constructor(private readonly verifyAccount: IVerifyAccount) {}
  async handle(req: VerifyAccountDTO): Promise<IResponse> {
    const errors = req.validationErrors;
    if (errors && errors.length > 0) {
      throw new BadRequestError(errors);
    }
    const { id, secret } = req;
    const verified = await this.verifyAccount.verify(id, secret);
    if (!verified) {
      throw new ForbiddenError("verification failed.");
    }
    return { status: 200, body: "Account verified" };
  }
}
