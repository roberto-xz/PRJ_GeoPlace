
import { API_CONFIGS } from "../api.config.mjs";
import jwt       from "jsonwebtoken"
import returns from '../returns/returns.mjs';

export const valid = (req,res) =>{
    let token = req.body.user_token;

    if (token == undefined )
        return res.status(200).json(returns.error_invalid_request());

    try {
        jwt.verify(token,API_CONFIGS.API_JKEY);
        return res.status(200).json({code: 200, message: 'ok'});
    }catch(e) {
        return res.status(200).json(returns.error_token_expired());
    }
}