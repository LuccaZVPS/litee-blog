import { IPasswordHasher } from "../../useCases/protocols/password-hasher";
import { hashSync } from "bcryptjs";
export class BcryptAdapter implements IPasswordHasher {
  hash(password: string): string {
    return hashSync(password);
  }
}
