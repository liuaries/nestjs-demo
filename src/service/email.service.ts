import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as smtpTransport from 'nodemailer-smtp-transport';

import { ConfigService } from './config.service';
import { iContent, iMailOptions, iResult } from './interface/email.interface';

@Injectable()
export class EmailService {
    constructor(
        private readonly configService: ConfigService
    ){}

    sendEmail(mailConfig: iContent): Promise<iResult> {
        return new Promise((resolve, reject) => {
            const {transport = 'default', target, title, text, html, attachments } = mailConfig;
            let transporter
            if(transport === 'default') {
                transporter = nodemailer.createTransport({
                    host: this.configService.getString('email_host'),
                    auth: {
                        user: this.configService.getString('email_auth_user'),
                        pass: this.configService.getString('email_auth_pass')
                    }
                })
            } else {
                transporter = nodemailer.createTransport(smtpTransport({
                    host: this.configService.getString('email_host'),
                    secure: true,
                    secureConnection: true,
                    port: this.configService.getNumber('email_port'),
                    auth: {
                        user: this.configService.getString('email_auth_user'),
                        pass: this.configService.getString('email_auth_pass')
                    }
                }))
            }

            const mailOptions: iMailOptions = {
                from: this.configService.getString('email_auth_user'),
                to: target,
                subject: title
            }
            if(text) {
                mailOptions.text = text
            }
            if(html) {
                mailOptions.html = html
            }
            if(attachments) {
                mailOptions.attachments = attachments
            }
            let result = {
                httpCode: 200,
                message: '发送成功!',
            }
            try {
                transporter.sendMail(mailOptions,(err, info)=>{
                    if (err) {
                        result.httpCode = 500;
                        result.message = err;

                        reject(result);
                    }
                    resolve(result);
                })
            } catch (err) {
                result.httpCode = 500;
                result.message = err;
                reject(result);
            }
        })
    }
}