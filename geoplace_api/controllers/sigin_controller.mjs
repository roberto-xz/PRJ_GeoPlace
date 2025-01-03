
import { isValidEmail, isValidHashSha1, numberToken } from "../Utils/utils.mjs";
import {UserModel}  from "../models/user_model.mjs";
import { mailTemplace } from "../Utils/mailTemplate.mjs";
import { ApiErros } from "../Erros/ApiErros.mjs";
import { createClient } from "redis";
import nodemailer from "nodemailer";
import dotenv from 'dotenv'
dotenv.config();

const redis_connect = async ()=> {
    const redis_c = createClient();
    
    redis_c.on('error',()=> {
        throw new ApiErros('Server Internal Error - Redis-Utilit',403);
    });

    await redis_c.connect();
    return redis_c;
}

const prepare_email = (numberToken,toEmail)=> {
    let fromEmail = process.env.geoplace_mail;

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:process.env.geoplace_mail,
            pass:process.env.geoplace_pass
        }
    });

    let status = transport.sendMail(mailTemplace(fromEmail,toEmail,numberToken));
    
    status.then(()=>{return true;})
    status.catch((e)=> {
        throw new ApiErros('Server Internal Error - Email-Not-Send',403);
    }); 
}

const checkUserExists = async (email) => {
    let userExists = await UserModel.findOne({
        where: { user_email: email},
        attributes: ['id']
    });
    return ( userExists != null ) ? true: false;
}


// rota 
export const siginController = async (req, res)=> {
    let user_mail = req.body.user_mail;
    let user_pass = req.body.user_pass;
 
    if ( isValidEmail(user_mail) && isValidHashSha1(user_pass)) {
        let token = numberToken(10); // cria um token 
        let userExists = await checkUserExists(user_mail); 
        if ( ! userExists ) {
            const redis_c = await redis_connect(); // tenta se connectar ao redis
            const sendm_s = await prepare_email(token,user_mail); // envia uma url para ativação via email

            // cria o usuário no banco de dados
            UserModel.create({
                user_email: user_mail,
                user_pass:  user_pass
            });
            redis_c.set(token,user_mail,{ex:29});
            return res.status(200).json({code: 200, message: 'ok'});
        }

        return res.status(200).json({
            code: 102, 
            message: 'Duplicate Data',
            type: 'email'
        });
    }
    
    return res.status(200).json({
        code: 100, 
        message: 'Invalid Request Format'
    });     
}