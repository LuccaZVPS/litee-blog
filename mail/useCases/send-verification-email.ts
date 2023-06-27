import {
  ISendEmailVerification,
  ISendEmailVerificationParams,
} from "../domain/useCases/send-email-verification";
import { EmailService, emailService } from "../infra/email-service";
import { makeVerificationTemplate } from "../templates/email-verification-template";

export class SendEmailVerification implements ISendEmailVerification {
  constructor(private readonly emailService: EmailService) {}
  async send(params: ISendEmailVerificationParams): Promise<void> {
    const emailVerificationTemplate = makeVerificationTemplate(
      params.accountId,
      params.secret,
      process.env.CLIENT_DOMAIN as string
    );
    this.emailService.send({
      body: emailVerificationTemplate,
      subject: "Email verification",
      to: params.email,
    });
  }
}
export const sendEmailVerification = new SendEmailVerification(emailService);
