import { IsUUID, IsOptional } from "class-validator";
export class FindPostDTO {
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
