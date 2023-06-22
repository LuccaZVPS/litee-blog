import { IPost } from "../../domnain/entities/post";
import { IAddPostDTO } from "../../domnain/useCases/add-post";

export interface IAddPostRepository {
  add(dto: IAddPostDTO): Promise<IPost>;
}
