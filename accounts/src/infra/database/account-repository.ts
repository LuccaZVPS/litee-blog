import { PrismaClient } from "@prisma/client";
import { IAccount } from "../../domain/entities/account";
import { ISignUpDTO } from "../../domain/useCases/signup";
import {
  IFindAccount,
  IFindAccountParams,
} from "../../useCases/protocols/find-account";
import { ISaveAccount } from "../../useCases/protocols/save-account";
import {
  IUpdateAccountParams,
  IUpdateAccountRepository,
} from "../../useCases/protocols/update-account-repository";
const prisma = new PrismaClient()
export class AccountRepository
  implements IUpdateAccountRepository, IFindAccount, ISaveAccount
{
  async findOne(id: string): Promise<IAccount | null> {
    return await prisma.account.findFirst({
      where:{
        id
      }
    })
  }
  async update(params: IUpdateAccountParams, _id: string): Promise<void> {
    await prisma.account.update({
      where:{
    id:_id
      },
      data:{
        ...params
      }
    })
  }
  async save(account: ISignUpDTO): Promise<IAccount> {
    const { email, name, password } = account;
    const accountCreated = await prisma.account.create({
      data:{
        email,name,password
      }
    })
    
    return accountCreated as unknown as IAccount;
  }
  async find(params: IFindAccountParams): Promise<void | IAccount> {
    return prisma.account.findFirst({
      where:{
        AND:{
          ...params

        }
      }
    })
  }
}
