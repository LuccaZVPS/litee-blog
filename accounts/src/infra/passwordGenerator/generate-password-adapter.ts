import { ISecretGenerator } from "../../useCases/protocols/secret-generator";
import { generate } from "generate-password";
export class GeneratePasswordAdapter implements ISecretGenerator {
  generate(): string {
    return generate({
      lowercase: true,
      symbols: false,
      uppercase: true,
      length: 50,
      numbers: true,
    });
  }
}
