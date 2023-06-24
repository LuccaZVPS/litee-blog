import { IController, IResponse } from "@litee-blog/shared/presentation";
import { resolve } from "path";
import fs from "fs";
const UPLOADS_DIRECTORY = resolve(__dirname, "..", "..", "uploads");
export class GetPictureController implements IController {
  async handle(req: any): Promise<IResponse> {
    console.log(UPLOADS_DIRECTORY);
    const acessPromise = () =>
      new Promise((resolve, reject) => {
        fs.access(
          UPLOADS_DIRECTORY + "/" + req.id,
          fs.constants.F_OK,
          (err) => {
            if (err) {
              resolve(false);
            } else {
              resolve(true);
            }
          }
        );
      });
    const fileExist = await acessPromise();
    if (!fileExist) {
      return {
        status: 200,
        file: UPLOADS_DIRECTORY + "/default.png",
        body: "",
      };
    }
    return { status: 200, file: UPLOADS_DIRECTORY + `/${req.id}`, body: "" };
  }
}
