
import 'dotenv/config'
import isValidLoginData from '../Utils/loginValidInputs.mjs'
import {models} from '../models/models.mjs'
import returns from '../returns/returns.mjs';
import jwt from "jsonwebtoken"

export const login = async (req, res)=> {
    let user_mail = req.body.user_mail;
    let user_pass = req.body.user_pass;

    if (isValidLoginData(user_mail,user_pass)) {
        const user = await models.Users.findOne({
            where: {
                user_email: user_mail,
                user_pass:  user_pass
            },
            attributes: ['id','user_name','user_account_status'],
        });
        
        if ( user != null ) {
            let user_payload = {
                type: 'login',
                uuid: user.id, 
                name: user.user_name
            }
            
            if (user.user_account_status == true ) {
                let token = jwt.sign(user_payload,process.env.api_jkey,{expiresIn: '1h'});
                return res.status(200).json( returns.success_with_data(token));
            }

            return res.status(200).json(returns.error_account_not_actived());
        }
        
        return res.status(200).json(returns.error_invalid_input());
    }
    
    return res.status(200).json(returns.error_invalid_request());

}