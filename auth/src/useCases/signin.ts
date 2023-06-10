import { ISignIn } from "../domain/useCases/signin";
import { ICompareHash } from "./protocols/compare-hash";
import { IEncrypter } from "./protocols/encrypter";
import { IFindAccountByEmail } from "./protocols/find-account-by-email";

export class SignIn implements ISignIn {
  constructor(
    private readonly findAccount: IFindAccountByEmail,
    private readonly compareHash: ICompareHash,
    private readonly encrypter: IEncrypter
  ) {}
  async signIn(email: string, password: string): Promise<string | void> {
    const account = await this.findAccount.find(email);
    if (!account) {
      return;
    }
    if (!this.compareHash.compare(account.password)) {
      return;
    }
    return this.encrypter.encrypt({ accountId: account._id });
  }
}
