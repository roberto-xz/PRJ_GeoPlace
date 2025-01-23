
import { models } from "../models/models.mjs";
import rediscnnx from "../src/rediscnnx.mjs";

const update_password = async (req,res)=> {
    const scode = req.body.gp_code;
    const passw = req.body.unpassw || " ";
    
    if (!scode) return res.sendStatus(401);
    if (!validator.isSha1(passw)) return res.sendStatus(400);
    
    const redis = await rediscnnx();    
    if (redis == null) {
       console.log('[geoplace_api] Redis is not connected:: /update_password');
       return res.status(500).send(); // Internal Server Error
    }

    const timer = await redis.ttl(scode)
    if ( timer > 2 ) {
        const user_data = await redis.get(scode)
        user_data = JSON.parse(user_data)
        if (user_data.ctype != 'recovery_password') return res.sendStatus(400);
        
        let [count,_] = await models.Users.update(
            {where: {user_pass:passw}}
        );

        if (count > 0 ) {
            redis.del(scode);
            return res.status(200).send() // 200 - Ok
        }
    }
    return res.sendStatus(401)
}
