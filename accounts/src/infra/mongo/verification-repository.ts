import { IVerification } from "../../domain/entities/verification";
import { IFindVerificationRepository } from "../../useCases/protocols/find-verification-repository";
import { ISaveVerification } from "../../useCases/protocols/save-verification";
import { IVerifyAccountRepository } from "../../useCases/protocols/verify-account-repository";
import { verificationModel } from "./models/verification-model";

export class VerificationRepository
  implements
    ISaveVerification,
    IFindVerificationRepository,
    IVerifyAccountRepository
{
  async save(accountId: string, randomSecret: string): Promise<string> {
    const { secret } = await verificationModel.create({
      accountId,
      secret: randomSecret,
    });
    return secret;
  }
  async find(id: string): Promise<void | IVerification> {
    const verification = await verificationModel
      .findOne({ accountId: id })
      .populate("account");
    if (!verification) {
      return;
    }
    return verification as unknown as IVerification;
  }
  async verify(id: string): Promise<void> {
    await verificationModel.updateOne(
      { _id: id },
      {
        $set: {
          status: true,
        },
      }
    );
  }
}
