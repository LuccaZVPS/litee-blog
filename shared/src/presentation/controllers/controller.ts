import { IResponse } from "./response";

export interface IController<T = any> {
  handle(req: T): Promise<IResponse>;
}
