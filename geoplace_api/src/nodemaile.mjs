
import nodemailer from "nodemailer";
import 'dotenv/config'


export default async (template) => {
    const email = nodemailer.createTransport({
        service: process.env.email_serv,
        auth:{
            user:process.env.geoplace_mail,  //.email_user
            pass:process.env.geoplace_pass   //.email_pass
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