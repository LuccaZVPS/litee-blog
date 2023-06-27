export enum EventNames {
  AccountCreated = "account:created",
  AccountUpdated = "account:updated",
  CategoryCreated = "category:created",
  CategoryDeleted = "category:deleted",
  CategoryUpdated = "category:updated",
}

export enum Services {
  Account = "account",
  Posts = "posts",
  Mail = "mail",
  Categories = "categories",
  Auth = "auth",
}
export interface AccountCreated {
  _id: string;
  name: string;
  email: string;
  secret: string;
}
export interface AccountUpdated {
  _id: string;
  data: {
    name?: string;
    imageName?: string;
  };
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
