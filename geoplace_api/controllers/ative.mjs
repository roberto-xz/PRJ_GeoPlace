
import {rediscnnx} from '../src/rediscnnx.mjs';
import {models} from '../models/models.mjs'
import returns  from '../returns/returns.mjs'

export const ative = async (req,res) =>{
    let token = req.body.user_token;
    let regex = /^\d{10}$/;
    
    if (!regex.test(token)) return res.json(returns.error_invalid_request()); 
    let redis = await rediscnnx();
    if (redis == null) {
       console.log('[geoplace_api] Redis is not connected:: /Valid');
       res.json(returns.error_operation_failed());
       return
    } 
    const timer = await redis.ttl(token);
    if (timer > 2 ) {
        let email = await redis.get(token);
        models.Users.update(
            {user_account_status: true},
            {where: {user_email:email}}
        );
        redis.del(token);
        res.json(returns.success());
        return 
    }
    res.json(returns.error_token_expired());
    return    
}