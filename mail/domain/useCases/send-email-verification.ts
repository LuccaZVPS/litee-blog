export interface ISendEmailVerification {
  send(params: ISendEmailVerificationParams): Promise<void>;
}
export interface ISendEmailVerificationParams {
  email: string;
  secret: string;
  accountId: string;
}
