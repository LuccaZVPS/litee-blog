import { IEncrypter } from "../../useCases/protocols/encrypter";
import { sign } from "jsonwebtoken";
import { config } from "dotenv";
config();
const secret = process.env.JWT_SECRET as string;
export class JwtAdapter implements IEncrypter {
  encrypt(data: object): string {
    return sign(data, secret);
  }
}
