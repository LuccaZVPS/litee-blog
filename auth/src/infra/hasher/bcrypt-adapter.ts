import { ICompareHash } from "../../useCases/protocols/compare-hash";
import { compareSync } from "bcryptjs";
export class BcryptAdapter implements ICompareHash {
  compare(password: string, hash: string): boolean {
    return compareSync(password, hash);
  }
}
