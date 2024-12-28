
import { API_CONFIGS } from "../api.config.mjs";
import jwt       from "jsonwebtoken"

export const validLoginController = (req,res) =>{
    let token = req.body.user_token;

    if (token == undefined )
        return res.status(200).json({code: 103, message: 'Bad Token Format'});

    try {
        jwt.verify(token,API_CONFIGS.API_JKEY);
        return res.status(200).json({code: 200, message: 'Token Valid'});
    }catch(e) {
        return res.status(200).json({code: 103, message: 'Bad Token Format or Expirated'});
    }
}