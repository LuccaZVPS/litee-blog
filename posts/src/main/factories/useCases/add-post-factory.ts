import { CategoryRepository } from "../../../infra/repositories/category-repository";
import { PostRepository } from "../../../infra/repositories/post-repository";
import { AddPost } from "../../../useCases/add-post";

export const addPostFactory = () =>
  new AddPost(new CategoryRepository(), new PostRepository());
