

import { isValidEmail, isValidHashSha1 } from "../Utils/utils.mjs";
import {UserModel} from "../models/user_model.mjs";
import { API_CONFIGS } from "../api.config.mjs";
import jwt       from "jsonwebtoken"


export const loginController = async (req, res)=> {
    let user_mail = req.body.user_mail;
    let user_pass = req.body.user_pass;

    if ( !isValidEmail(user_mail) || !isValidHashSha1(user_pass))
        return res.status(200).json({code: 100, message: 'Invalid Request Format'});

    const user = await UserModel.findOne({
        where: {
            user_email: user_mail,
            user_pass:  user_pass
        },
        attributes: ['id','user_name'],
    });
    
    if (user == null )
        return res.status(200).json({code: 101, message: 'Invalid Data'});
    
       
    let user_payload = {
        type: 'login',
        uuid: user.id, 
        name: user.user_name
    }
    
    let token = jwt.sign(user_payload,API_CONFIGS.API_JKEY,{expiresIn: '1h'});
    return res.status(200).json({code: 200,user_token: token});
}