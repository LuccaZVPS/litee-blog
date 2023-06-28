import { IVerification } from "../../domain/entities/verification";

export interface IFindVerificationRepository {
  find(id: string): Promise<void | IVerification>;
}
