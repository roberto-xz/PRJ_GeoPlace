
import { models } from "../models/models.mjs";
import { check_scode } from "../utils/scode.mjs";
import rediscnnx from "../src/rediscnnx.mjs";
import validator from 'validator'

export const update_pwd = async (req,res)=> {
    const scode = req.body.gp_code;
    const passw = req.body.unpassw || " ";
    let user_data;

    if (!check_scode(scode)) return res.sendStatus(401);
    if (!validator.isHash(passw,'sha1')) return res.sendStatus(400);
    
    const redis = await rediscnnx();    
    if (redis == null) {
       console.log('[geoplace_api] Redis is not connected:: /update_password');
       return res.status(500).send(); // Internal Server Error
    }

    const timer = await redis.ttl(scode)
    if ( timer > 2 ) {
        user_data = await redis.get(scode)
        user_data = JSON.parse(user_data)
        if (user_data.ctype != 'recovery_password') return res.sendStatus(401);
        
        let [count,_] = await models.Users.update(
            {user_pass:passw},
            {where: {user_email:user_data.email}},
        );

        if ( count > 0 ) {
            redis.del(scode);
            return res.status(200).send() // 200 - Ok
        }
        return res.sendStatus(412)
    }
    return res.sendStatus(408)
}
