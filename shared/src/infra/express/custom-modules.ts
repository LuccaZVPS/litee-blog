import { ISerializeError } from "../../presentation/errors";

declare module Express {
  interface Request {
    accountId: string;
    validationErrors: ISerializeError[];
  }
}
