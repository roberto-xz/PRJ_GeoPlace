
import rediscnnx from '../src/rediscnnx.mjs';
import nodemaile from '../src/nodemaile.mjs';

import valid_login from '../utils/login_valid.mjs';
import secret_code from '../utils/creat_scode.mjs';
import email_plate from '../utils/email_plate.mjs';

import {models} from '../models/models.mjs'
import returns  from '../returns/returns.mjs';


export const sigin = async (req, res)=> {
    let user_mail = req.body.user_mail;
    let user_pass = req.body.user_pass;
    
    if (valid_login(user_mail,user_pass) == false ) {
        res.json(returns.error_invalid_request());
        return;
    }
    
    let redis = await rediscnnx();
    if (redis == null) {
       console.log('[geoplace_api] Redis is not connected:: /sigin');
       res.json(returns.error_operation_failed());
       return
    }

    const [user, created ] = await models.Users.findOrCreate({
        where:    { user_email: user_mail },
        defaults: { user_pass:  user_pass }
    });

    if (created) {
        let scode = secret_code();
        let email = email_plate(user_mail,scode);

        //enviando um email
        //const email_status = await nodemaile(email);
        const email_status = true;
        
        if (email_status) {
            redis.set(scode,user_mail,{EX:600});
            res.json(returns.success());
            redis.quit()
            return
        }
        res.json(returns.error_operation_failed());
        redis.quit()
        return;
    }

    res.json(returns.error_duplicate_entry('email'));
    redis.quit();
    return;     
}