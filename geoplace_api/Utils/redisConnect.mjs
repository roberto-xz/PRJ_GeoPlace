
import { createClient } from "redis";

export const redis_connect = async ()=> {
    let redis_c = createClient();
    try { 
        await redis_c.connect();
    } catch(e){
        throw new Error("Redis Connect Error");
        return;
    }
    return redis_c;
}