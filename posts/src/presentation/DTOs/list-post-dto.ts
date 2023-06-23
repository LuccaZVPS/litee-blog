import { DTO } from "@litee-blog/shared/presentation";
import { IsUUID, IsOptional } from "class-validator";
export class ListPostDTO extends DTO {
  constructor() {
    super();
  }
  @IsUUID()
  @IsOptional()
  ownerId?: string;
  @IsUUID()
  @IsOptional()
  id?: string;
  @IsUUID()
  @IsOptional()
  categoryId?: string;
  declare page: number;
}
