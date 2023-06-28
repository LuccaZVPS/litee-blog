import { ForbiddenError } from "@litee-blog/shared/presentation";
import { IVerifyAccount } from "../domain/useCases/verify-account";
import { IFindVerificationRepository } from "./protocols/find-verification-repository";
import { IVerifyAccountRepository } from "./protocols/verify-account-repository";
import { accountVerifiedPublisher } from "../events/publishers/account-verified-publisher";
import { AccountVerified } from "@litee-blog/shared/infra/broker";

export class VerifyAccount implements IVerifyAccount {
  constructor(
    private readonly findVerification: IFindVerificationRepository,
    private readonly verifyAccountRepository: IVerifyAccountRepository
  ) {}
  async verify(id: string, secret: string): Promise<void> {
    const verification = await this.findVerification.find(id);
    if (
      !verification ||
      verification.secret !== secret ||
      !verification.account
    ) {
      throw new ForbiddenError("Verification failed!");
    }
    if (verification.status == true) {
      return;
    }
    await this.verifyAccountRepository.verify(id);
    const { _id, email, name, password } = verification.account;
    await accountVerifiedPublisher.publisher<AccountVerified>({
      _id,
      email,
      name,
      password,
    });
    return;
  }
}
