import { IFindAndUpdateVerification } from "../../../useCases/protocols/find-and-update-verification";
import { ISaveVerification } from "../../../useCases/protocols/save-verification";
import { verificationModel } from "../models/verification-model";

export class VerificationRepository
  implements ISaveVerification, IFindAndUpdateVerification
{
  async save(accountId: string, randomSecret: string): Promise<string> {
    const { secret } = await verificationModel.create({
      accountId,
      secret: randomSecret,
    });
    return secret;
  }
  async update(id: string, secret: string): Promise<boolean> {
    const verification = await verificationModel.findOne({
      accountId: id,
      secret: secret,
    });
    if (!verification) {
      return false;
    }
    verification.status = true;
    await verification.save();
    return true;
  }
}
