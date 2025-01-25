
import {models} from '../models/models.mjs'
import nodemaile from '../src/nodemaile.mjs';
import rediscnnx from '../src/rediscnnx.mjs'
import { gen_scode } from '../utils/scode.mjs';
import { valid_email } from '../utils/valid_email.mjs';

export const recovery_pwd = async (req,res)=> {
    let email = req.body.user_email;
    
    if (!valid_email(email)) return res.sendStatus(400);

    let redis = await rediscnnx();
    if (redis == null) {
        console.log('[geoplace_api] Redis is not connected:: /recovery_password');
        return res.status(500).send(); // Internal Server Error
    }

    const user = await models.Users.findOne({
        where: {user_email:email},
        attributes:['id','user_account_status']
    })

    if (!user) return res.sendStatus(404); // usuário não encontrado
    if (user.user_account_status == false ) return res.sendStatus(401); // sem autorização
    
    //const email_status = await nodemaile(); // envia o email
    const email_status = true // para teste

    if (email_status) {
        const scode = gen_scode()
        let redis_value = JSON.stringify({
            email: email,
            ctype: 'recovery_password'
        });
        redis.set(scode,redis_value,{EX:600});
        return res.send('ok');       
    }

    console.log('[geoplace_api] Error on send email:: /recovery_password');
    return res.sendStatus(500); // email não foi enviado
} 




