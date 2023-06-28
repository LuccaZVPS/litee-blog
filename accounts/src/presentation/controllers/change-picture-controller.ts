import {
  IController,
  IResponse,
} from "@litee-blog/shared/presentation/protocols";
import { IChangePicture } from "../../domain/useCases/change-picture";
import { ChangePictureDTO } from "../DTOs/change-picture-dto";
import { BadRequestError } from "@litee-blog/shared/presentation";
import fs from "fs";
export class ChangePictureController implements IController {
  constructor(private readonly changePicture: IChangePicture) {}
  async handle(req: ChangePictureDTO): Promise<IResponse> {
    // eslint-disable-next-line no-useless-catch
    try {
      const errors = req.validationErrors;
      if (errors && errors.length > 0) {
        throw new BadRequestError(errors);
      }
      await this.changePicture.change(req.accountId, req.file.filename);
      return { status: 200, body: "Picture changed!" };
    } catch (e) {
      fs.unlinkSync(req.file.filename);
      throw e;
    }
  }
}
