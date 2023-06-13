import { IsString, MinLength, validate } from "class-validator";
import { BadRequestError, ISerializeError } from "../errors";
import { NextFunction, Request, Response } from "express";
class TesteDTO {
  constructor() {
    this.name = "";
  }
  @IsString()
  @MinLength(10)
  name: string;
}
export class ValidationMiddleware {
  async validator(data: any): Promise<ISerializeError[]> {
    const validationErrors = await validate(data);
    console.log(validationErrors);
    if (!validationErrors || validationErrors.length < 1) {
      return [];
    }
    const errors = validationErrors.map((i) => {
      const messages = [];
      for (const prop in i.constraints) {
        messages.push(i.constraints[prop]);
      }
      return {
        field: i.property,
        message: messages,
      };
    });
    return errors;
  }
  async run(dto: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      const errors = await this.validator(new dto());
      if (errors) {
        throw new BadRequestError(errors);
      }
      next();
    };
  }
}

const middlewareValidator = new ValidationMiddleware();
export { middlewareValidator };
