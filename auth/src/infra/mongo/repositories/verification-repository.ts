import { ISaveVerification } from "../../../useCases/protocols/save-verification";
import { verificationModel } from "../models/verification-model";

export class VerificationRepository implements ISaveVerification {
  async save(accountId: string, randomSecret: string): Promise<string> {
    const { secret } = await verificationModel.create({
      accountId,
      secret: randomSecret,
    });
    return secret;
  }
}
