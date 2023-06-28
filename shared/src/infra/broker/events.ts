export enum EventNames {
  AccountVerified = "account:verified",
  AccountUpdated = "account:updated",
  CategoryCreated = "category:created",
  CategoryDeleted = "category:deleted",
  CategoryUpdated = "category:updated",
  AccountCreated = "account:created",
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

export interface AccountVerified {
  _id: string;
  name: string;
  email: string;
  password: string;
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
