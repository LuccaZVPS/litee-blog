import { prisma } from "../..";

export class AccountRepository {
  async add(id: string, name: string) {
    await prisma.account.create({
      data: {
        name,
        id,
      },
    });
  }
}
