import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ed659bca99deb5",
      pass: "4f4a178f87989c"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Bruno Lopes <brunoslopes1994@gmail.com>",
            subject,
            html: body,
        });
    }
}