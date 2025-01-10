
import rediscnnx from '../src/rediscnnx.mjs';
import nodemaile from '../src/nodemaile.mjs';

import valid_login from '../utils/login_valid.mjs';
import secret_code from '../utils/creat_scode.mjs';
import email_plate from '../utils/email_plate.mjs';
import {models}    from '../models/models.mjs'

export const sigin = async (req, res)=> {
    let user_mail = req.body.user_mail;
    let user_pass = req.body.user_pass;
    
    if (valid_login(user_mail,user_pass) == false ) 
         return res.status(400).send(); // Bad Request
    
    let redis = await rediscnnx();
    if (redis == null) {
        console.log('[geoplace_api] Redis is not connected:: /sigin');
        return res.status(500).send(); // Internal Server Error
    }

    const [_, created ] = await models.Users.findOrCreate({
        where:    { user_email: user_mail },
        defaults: { user_pass:  user_pass }
    });

    if (created) {
        let scode = secret_code();
        let email = email_plate(user_mail,scode);

        //const email_status = await nodemaile(email); // envia um email
        const email_status = true;
        
        if (email_status) {
            redis.set(scode,user_mail,{EX:600});
            return res.send('ok');
        }
        console.log('[geoplace_api] Error on send email:: /sigin');
        return res.status(500).send(); // Internal Server Error
    }

    res.status(409).send() // unic conflict
    return;     
}