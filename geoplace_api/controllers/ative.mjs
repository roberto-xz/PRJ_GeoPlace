
import rediscnnx from '../src/rediscnnx.mjs';
import {models} from '../models/models.mjs'
import returns  from '../returns/returns.mjs'

export const ative = async (req,res) =>{
    let token = req.body.user_token;
    let redis = await rediscnnx();

    if (redis == null) {
       console.log('[geoplace_api] Redis is not connected:: /ative');
       return res.status(500).send(); // Internal Server Error
    } 
    const timer = await redis.ttl(token);
    if (timer > 2 ) {
        let email = await redis.get(token);
        let [count,_] = await models.Users.update(
            {user_account_status: true},
            {where: {user_email:email}}
        );
        if (count > 0 ) {
            redis.del(token);
            return res.status(200).send() // 200 - Ok
        }
    }
    res.status(401).send() // Unauthorized
    return    
}