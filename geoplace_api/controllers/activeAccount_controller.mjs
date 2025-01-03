
import { redis_connect } from "../Utils/redisConnect.mjs";
import { UserModel }  from "../models/user_model.mjs";
import returns from '../returns/returns.mjs'

export const activeAccountController = async (req,res) =>{
    let token = req.body.user_token;
    let regex = /^\d{10}$/;
    
    if (regex.test(token)) {
        let redis = await redis_connect();
        let tkttl = await redis.ttl(token);
        if (tkttl > 2 ) {
            let email = await redis.get(token);
            UserModel.update(
                {user_account_status: true},
                {where: {user_email:email}}
            );
            redis.del(token);
            redis.disconnect();   
            return res.status(200).json(returns.ok);
        }
        return res.status(200).json(returns.token_expirated);
    }

    return res.status(200).json(returns.invalid_request); 
}