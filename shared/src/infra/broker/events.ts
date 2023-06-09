export enum EventNames {
  AccountCreated = "account:created",
  AccountVerified = "account:verified",
  BlogCreated = "blog:created",
}
export interface AccountCreated {
  _id: string;
  name: string;
  email: string;
  secret: string;
}
