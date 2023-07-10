import { PrismaClient } from "@prisma/client";
import { IAccount } from "../../../domain/entities/account";
import { IFindAccountByEmail } from "../../../useCases/protocols/find-account-by-email";
const prisma = new PrismaClient()
export class AccountRepository implements IFindAccountByEmail {
  async find(email: string): Promise<void | IAccount> {
    const account = await prisma.account.findUnique({
      where:{
        email
            }
    })
    if (!account) {
      return;
    }
    return {
      id: account.id,
      email: account.email,
      name: account.name,
      password: account.password,
    };
  }
  async update(params: IUpdateAccountParams) {
    await prisma.account.update({
      where:{
        id:params.id
      },
      data:{
        ...params.data
      }
    })
  }
  async save(params: {
    email: string;
    password: string;
    name: string;
    id: string;
  }) {
    await prisma.account.create({
      data:{
        ...params
      }
    })
   
  }
}

interface IUpdateAccountParams {
  id: string;
  data: {
    name?: string;
    email?: string;
    password?: string;
    verified?: boolean;
  };
}
