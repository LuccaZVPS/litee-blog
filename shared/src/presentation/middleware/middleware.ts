export interface IMiddleware<T = any> {
  handle: (httpRequest: T) => Promise<void>;
}
