export interface IResponse {
  status: number;
  body: any;
  cookies?: Cookie[];
  file?: string;
}
export interface Cookie {
  name: string;
  value: string;
}
