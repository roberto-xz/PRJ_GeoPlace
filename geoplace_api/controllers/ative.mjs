
import { redis_connect } from "../Utils/redisConnect.mjs";
import {models} from '../models/models.mjs'
import returns from '../returns/returns.mjs'

export const ative = async (req,res) =>{
    let token = req.body.user_token;
    let regex = /^\d{10}$/;
    
    if (regex.test(token)) {
        let redis = await redis_connect();
        let tkttl = await redis.ttl(token);
        
        if (tkttl > 2 ) {
            let email = await redis.get(token);
            models.Users.update(
                {user_account_status: true},
                {where: {user_email:email}}
            );
            redis.del(token);
            return res.status(200).json(returns.success());
        }
        return res.status(200).json(returns.error_token_expired());
    }

    return res.status(200).json(returns.error_invalid_request()); 
}