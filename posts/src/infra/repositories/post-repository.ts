import { prisma } from "../..";
import { IPost } from "../../domnain/entities/post";
import { IAddPostDTO } from "../../domnain/useCases/add-post";
import { IFindPostFilters } from "../../domnain/useCases/find-post";
import { IAddPostRepository } from "../../useCases/protocols/add-post-repository";
import { IDeletePostRepository } from "../../useCases/protocols/delete-post-repository";
import { IFindPostRepository } from "../../useCases/protocols/find-post-repository";

export class PostRepository
  implements IAddPostRepository, IFindPostRepository, IDeletePostRepository
{
  async add(dto: IAddPostDTO): Promise<IPost> {
    const { accountId, categories, content, imagePath, title, imageName } = dto;
    const post = await prisma.post.create({
      data: {
        accountId,
        content,
        title,
        imagePath,
        imageName,
        categories: {
          connect: categories.map((c) => {
            return { id: c };
          }),
        },
      },
    });
    return post as unknown as IPost;
  }

  async find(
    filters: IFindPostFilters,
    page: number,
    full?: boolean
  ): Promise<{ posts: IPost[]; totalPages: number }> {
    const POSTS_PER_PAGE = 10;
    const categoryId = filters.categoryId;
    delete filters.categoryId;
    const totalPosts = await prisma.post.count({ where: { ...filters } });
    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
    const posts = (await prisma.post.findMany({
      where: {
        categories: {
          some: {
            id: categoryId,
          },
        },
      },
      skip: (page - 1) * POSTS_PER_PAGE,
      take: POSTS_PER_PAGE,
      select: {
        content: full || false,
        accountId: true,
        id: true,
        imagePath: true,
        title: true,
        imageName: true,
        categories: true,
      },
    })) as unknown as IPost[];

    return { posts, totalPages };
  }

  async delete(postId: string): Promise<void> {
    await prisma.post.delete({
      where: {
        id: postId,
      },
    });
  }
}
