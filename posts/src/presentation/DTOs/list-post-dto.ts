import { IsUUID, IsOptional } from "class-validator";
export class ListPostDTO {
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
