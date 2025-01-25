
import rediscnnx from '../src/rediscnnx.mjs';
import nodemaile from '../src/nodemaile.mjs';
import { models } from "../models/models.mjs";
import { valid_email } from "../utils/valid_email.mjs";
import { gen_scode  } from '../utils/scode.mjs';
import email_plate from '../utils/email_plate.mjs';


export const get_new_scode = async (req, res) => {
    const user_email = req.body.user_email;

    if (valid_email(user_email)) {
       const user = await models.Users.findOne({
            where: { user_email: user_email },
            attributes: ['id', 'user_account_status', 'user_scode_rc_max_trys']
        });

        if (!user) return res.sendStatus(404); // Usuário não encontrado
        
        // O usuário já esta ativo, não tem mais autorização
        // para requisitar códigos de ativação.
        console.log(user.user_account_status)
        if (user.user_account_status) return res.sendStatus(401); // Unauthorized
        
        // Escedeu o limite de requisições
        if (!user.user_scode_rc_max_trys) return res.sendStatus(429); // Too Many Requests

        let redis = await rediscnnx();
        if (redis == null) {
            console.log('[geoplace_api] Redis is not connected:: /rative');
            return res.status(500).send(); // Internal Server error_operation_failed
        }

        let scode = gen_scode();
        let email = email_plate(user_email,scode);
        
        //const email_status = await nodemaile(email);
        const email_status = true;

        if (email_status) {
            redis.set(scode,user_email,{EX:600});
            user.user_scode_rc_max_trys -= 1;
            await user.save();
            return res.status(200).send();
        }
        console.log('[geoplace_api] Error on send email:: /rative');
        return res.status(500).send();
    }

    return res.status(400).send(); // Bad Request
}
