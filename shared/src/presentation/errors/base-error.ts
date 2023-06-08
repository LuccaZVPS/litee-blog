export abstract class BaseError extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, BaseError.prototype);
  }
  abstract statusCode: number;
  abstract serializeErrors(): { message: string; field?: string }[];
}
