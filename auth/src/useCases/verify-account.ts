import { IVerifyAccount } from "../domain/useCases/verify-account";
import { IFindAndUpdateVerification } from "./protocols/find-and-update-verification";

export class VerifyAccount implements IVerifyAccount {
  constructor(
    private readonly findAndUpdateVerification: IFindAndUpdateVerification
  ) {}
  verify(id: string, secret: string): Promise<boolean> {
    return this.findAndUpdateVerification.update(id, secret);
  }
}
