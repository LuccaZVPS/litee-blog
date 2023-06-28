import { ICompareHash } from "../../useCases/protocols/compare-hash";
import { IPasswordHasher } from "../../useCases/protocols/password-hasher";
import { hashSync, compareSync } from "bcryptjs";
export class BcryptAdapter implements IPasswordHasher, ICompareHash {
  hash(password: string): string {
    return hashSync(password);
  }
  compare(password: string, hash: string): boolean {
    return compareSync(password, hash);
  }
}
