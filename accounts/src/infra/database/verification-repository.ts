import { PrismaClient } from "@prisma/client";
import { IVerification } from "../../domain/entities/verification";
import { IFindVerificationRepository } from "../../useCases/protocols/find-verification-repository";
import { ISaveVerification } from "../../useCases/protocols/save-verification";
import { IVerifyAccountRepository } from "../../useCases/protocols/verify-account-repository";
const prisma = new PrismaClient()
export class VerificationRepository
  implements
    ISaveVerification,
    IFindVerificationRepository,
    IVerifyAccountRepository
{
  async save(accountId: string, randomSecret: string): Promise<string> {
    const {secret} = await prisma.verification.create({
      data:{
        accountId,
        secret: randomSecret,
      }
    })
       
    return secret;
  }
  async find(id: string): Promise<void | IVerification> {
    const verification = await prisma.verification.findUnique({
      where:{
        accountId:id
      },
      include:{
        account:true
      }
    })

    if (!verification) {
      return;
    }
    return verification as unknown as IVerification;
  }
  async verify(id: string): Promise<void> {
    await prisma.verification.update({
      where:{
        accountId:id

      },
      data:{
        status: true,

      }
    })
  }
}
