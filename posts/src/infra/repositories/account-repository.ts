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
  async update(params: {
    id: string;
    data: { imageName?: string; name?: string };
  }) {
    await prisma.account.update({
      data: {
        ...params.data,
      },
      where: {
        id: params.id,
      },
    });
  }
}
