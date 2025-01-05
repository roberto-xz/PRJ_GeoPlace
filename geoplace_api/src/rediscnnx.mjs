
import { createClient } from "redis";

export default async ()=> {
    let redis = createClient();
    
    try { 
        await  redis.connect();
        return redis;
    } catch(e){ return null;}
}