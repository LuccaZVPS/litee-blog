import { prisma } from "../..";
import { IPost } from "../../domnain/entities/post";
import { IAddPostDTO } from "../../domnain/useCases/add-post";
import { IAddPostRepository } from "../../useCases/protocols/add-post-repository";

export class PostRepository implements IAddPostRepository {
  async add(dto: IAddPostDTO): Promise<IPost> {
    const { accountId, categories, content, imageName, title } = dto;
    const post = await prisma.post.create({
      data: {
        accountId,
        content,
        title,
        imageId: imageName,
        categories: {
          connect: categories.map((c) => {
            return { id: c };
          }),
        },
      },
    });
    return post as unknown as IPost;
  }
}
