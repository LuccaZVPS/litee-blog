import { ISerializeError } from "../errors";

export class DTO {
  declare accountId: string;
  declare validationErrors?: ISerializeError[];
}
