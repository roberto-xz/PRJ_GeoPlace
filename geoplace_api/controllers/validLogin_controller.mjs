
import { API_CONFIGS } from "../api.config.mjs";
import jwt       from "jsonwebtoken"

export const validLoginController = (req,res) =>{
    let token = req.body.user_token;

    if (token == undefined )
        return res.status(200).json({code: 100, message: 'Invalid Request Format'});

    try {
        jwt.verify(token,API_CONFIGS.API_JKEY);
        return res.status(200).json({code: 200, message: 'ok'});
    }catch(e) {
        return res.status(200).json({code: 100, message: 'Invalid Request Format'});
    }
}