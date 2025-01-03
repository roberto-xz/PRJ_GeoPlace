
import { createClient } from "redis";

export const redis_connect = async ()=> {
    const redis_c = createClient();
    
    redis_c.on('error',()=> {
        throw new ApiErros('Server Internal Error - Redis-Utilit',403);
    });

    await redis_c.connect();
    return redis_c;
}