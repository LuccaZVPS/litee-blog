import {
  BadRequestError,
  IController,
  IResponse,
} from "@litee-blog/shared/presentation";
import { IChangeName } from "../../domain/useCases/change-name";
import { ChangeNameDTO } from "../DTOs/change-name-dto";

export class ChangeNameController implements IController {
  constructor(private readonly changeName: IChangeName) {}
  async handle(req: ChangeNameDTO): Promise<IResponse> {
    const errors = req.validationErrors;
    if (errors && errors.length > 0) {
      throw new BadRequestError(errors);
    }
    await this.changeName.change(req.accountId, req.name);
    return { status: 200, body: "Name updated!" };
  }
}
