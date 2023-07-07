import { AccountRepository } from "../../../infra/database/account-repository";
import { ChangePicture } from "../../../useCases/change-picture";

export const changePictureFactory = () => {
  const accountRepository = new AccountRepository();
  return new ChangePicture(accountRepository, accountRepository);
};
