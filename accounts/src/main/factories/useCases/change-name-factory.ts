import { AccountRepository } from "../../../infra/mongo/account-repository";
import { ChangeName } from "../../../useCases/change-name";

export const changeNameFactory = () => {
  return new ChangeName(new AccountRepository());
};
