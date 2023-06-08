export interface IController {
  handle(req: Request): Promise<Response>;
}
export interface Response {
  status: number;
  body: any;
}
export interface Request {
  params: any;
  body: any;
  query: any;
}
