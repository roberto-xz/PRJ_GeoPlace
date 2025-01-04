
import { redis_connect } from "../Utils/redisConnect.mjs";
import isValidLoginData  from '../Utils/loginValidInputs.mjs'
import genToken from '../Utils/generateToken.mjs';
import {models} from '../models/models.mjs'
import { mailTemplace } from "../Utils/mailTemplate.mjs";
import nodemailer from "nodemailer";
import returns from '../returns/returns.mjs';
import dotenv from 'dotenv'
import { Transaction } from "sequelize";
dotenv.config();



const sendEmail = (numberToken,toEmail)=> {
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
        throw new Error('Error On Send Email Message',403);
    }); 
}

// const checkUserExists = async (email) => {
//     let userExists = await models.Users.findOne({
//         where: { user_email: email},
//         attributes: ['id']
//     });
//     return ( userExists != null ) ? true: false;
// }


export const sigin = async (req, res)=> {
    let user_mail = req.body.user_mail;
    let user_pass = req.body.user_pass;
 
    if (isValidLoginData(user_mail,user_pass)) {
        let token = genToken(10);
        let redis = undefined;
        let smail = undefined;

        // let userExists = await checkUserExists(user_mail); 
        const [user, created ] = await models.Users.findOrCreate({
            where: {
                user_email: user_mail,
            },
            defaults: {
                user_pass:  user_pass
            },
            transaction: null
        });

        if (created) {
            redis = await redis_connect();
            redis.set(token,user_mail,{EX:600});
            //smail = await sendEmail(token,user_mail);
            return res.status(200).json(returns.success());
        }

        return res.status(200).json(returns.error_duplicate_entry('email'));
    }
    
    return res.status(200).json(returns.error_invalid_request());     
}