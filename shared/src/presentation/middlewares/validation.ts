import { validate } from "class-validator";
import { BadRequestError, ISerializeError } from "../errors";
import { Response } from "express";

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
  handle(dto: any) {
    return async (body: any) => {
      const instancedDTO = new dto();
      for (const field in instancedDTO) {
        if (body[field]) {
          instancedDTO[field] = body[field];
        }
      }
      const errors = await this.validator(instancedDTO);
      if (errors.length > 0) {
        throw new BadRequestError(errors);
      }
    };
  }
}

const middlewareValidator = new ValidationMiddleware();
export { middlewareValidator };
