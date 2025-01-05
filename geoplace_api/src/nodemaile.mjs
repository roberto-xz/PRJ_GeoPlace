
import nodemailer from "nodemailer";
import 'dotenv/config'


export default async (template) => {
    const email = nodemailer.createTransport({
        service: process.env.email_serv,
        auth:{
            user:process.env.email_user,
            pass:process.env.email_pass
        }
    });

    try {
        await email.sendMail(template);
        return true;
    } catch(e) {
         console.log('[geoplace_api] NodeMailer not send email');
         return null;
    }
}