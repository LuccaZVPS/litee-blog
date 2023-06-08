import { BaseError } from "./base-error";
import { ISerializeError } from "./not-found-error";

export class BadRequestError extends BaseError {
  statusCode = 400;
  reason: ISerializeError[];
  constructor(message: ISerializeError[]) {
    super();
    this.reason = message;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  serializeErrors(): { message: string; field?: string | undefined }[] {
    return this.reason;
  }
}
