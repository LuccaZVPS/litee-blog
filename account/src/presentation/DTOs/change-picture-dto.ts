import { DTO } from "@litee-blog/shared/presentation";

export class ChangePictureDTO extends DTO {
  constructor() {
    super();
  }
  declare file: { filename: string };
}
