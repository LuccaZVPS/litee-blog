export interface IResponse {
  status: number;
  body: any;
  cookies?: Cookie[];
}
export interface Cookie {
  name: string;
  value: string;
}
