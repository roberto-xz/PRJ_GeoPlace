
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import returns from '../returns/returns.mjs';

export const valid = (req,res) => {
    let token = req.body.user_token;

    if (token == undefined )
        return res.json(returns.error_invalid_request());

    jwt.verify(token,process.env.api_jkey,(err, decode) => {
        return ( decode == undefined ) 
            ? res.json(returns.error_token_expired()) 
            : res.json(returns.success());
    });
}