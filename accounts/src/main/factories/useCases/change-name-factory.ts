import { AccountRepository } from "../../../infra/database/account-repository";
import { ChangeName } from "../../../useCases/change-name";

export const changeNameFactory = () => {
  return new ChangeName(new AccountRepository());
};
