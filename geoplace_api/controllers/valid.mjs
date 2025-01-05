
import 'dotenv/config'
import jwt       from "jsonwebtoken"
import returns from '../returns/returns.mjs';

export const valid = (req,res) =>{
    let token = req.body.user_token;

    if (token == undefined )
        return res.status(200).json(returns.error_invalid_request());

    try {
        jwt.verify(token,process.env.api_jkey);
        return res.status(200).json({code: 200, message: 'ok'});
    }catch(e) {
        return res.status(200).json(returns.error_token_expired());
    }
}