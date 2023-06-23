export enum EventNames {
  AccountCreated = "account:created",
  CategoryCreated = "category:created",
  CategoryDeleted = "category:deleted",
}
export interface AccountCreated {
  _id: string;
  name: string;
  email: string;
  secret: string;
}
export interface CategoryCreated {
  id: string;
  title: string;
}
export interface CategoryDeleted {
  id: string;
}
export interface CategoryUpdated {
  id: string;
  title: string;
}
