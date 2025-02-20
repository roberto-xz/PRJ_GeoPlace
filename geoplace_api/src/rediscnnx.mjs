
import { createClient } from "redis";

let connection = null;

export default  async ()=> {
    if (connection == null) {
        connection = createClient();
        try { 
            await connection.connect();
        } catch(e){ connection = null}
    }
    return connection
}