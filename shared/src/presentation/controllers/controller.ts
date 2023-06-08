import { IRequest } from "./request";
import { IResponse } from "./response";

export interface IController {
  handle(req: IRequest): Promise<IResponse>;
}
