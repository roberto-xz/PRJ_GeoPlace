
import validator from "validator";
import rediscnnx from '../src/rediscnnx.mjs';
import nodemaile from '../src/nodemaile.mjs';
import returns from "../returns/returns.mjs";
import { models } from "../models/models.mjs";
import secret_code from '../utils/creat_scode.mjs';
import email_plate from '../utils/email_plate.mjs';
import { Model } from "sequelize";

export const rtive = async (req, res) => {
    const user_mail = req.body.user_mail;

    if (user_mail != undefined && validator.isEmail(user_mail)) {
        const user = await models.Users.findOne({
            where: {user_email: user_mail},
            atributtes: ['id','user_account_status','user_scode_rc_max_trys'] 
        })
        
        if (user == null) 
            return res.status(400).send(); // Bad Request
        if (user.user_account_status == true)
            res.status(401).send() // Unauthorized
        
        if ( user.user_scode_rc_max_trys == 0 ) // verifica se ainda há tentativas 
             res.status(429).send() // Too Many Requests

        let redis = await rediscnnx();
        if (redis == null) {
            console.log('[geoplace_api] Redis is not connected:: /rative');
            return res.status(500).send(); // Internal Server error_operation_failed
        }

        let scode = secret_code();
        let email = email_plate(user_mail,scode);
        
        //enviando um email
        //const email_status = await nodemaile(email);
        const email_status = true;

        if (email_status) {
            redis.set(scode,user_mail,{EX:600});
            user.user_scode_rc_max_trys -= 1;
            await user.save();
            return res.status(200).send();
        }
        console.log('[geoplace_api] Error on send email:: /rative');
        return res.status(500).send();
    }

    return res.status(400).send(); // Bad Request
}