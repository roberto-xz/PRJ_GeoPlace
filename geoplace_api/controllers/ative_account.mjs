
import rediscnnx from '../src/rediscnnx.mjs';
import {models} from '../models/models.mjs'

export const active_account = async (req,res) => {
    let scode = req.body.gp_scode;
    
    if (!scode || scode.length < 25 || scode.length > 25 )
        return res.sendStatus(400)

    let redis = await rediscnnx();
    
    if (redis == null) {
       console.log('[geoplace_api] Redis is not connected:: /ative');
       return res.status(500).send(); // Internal Server Error
    }
    
    let rdata = await redis.get(scode);
    rdata = JSON.parse(rdata);

    if (rdata.ctype == 'ative_account') {
        const timer = await redis.ttl(scode);
        if (timer > 2 ) {
            let [count,_] = await models.Users.update(
                {user_account_status: true},
                {where: {user_email:rdata.email}}
            );
            if (count > 0 ) {
                redis.del(scode);
                return res.status(200).send() // 200 - Ok
            }
        }
    }
    res.status(401).send() // Unauthorized
    return    
}
