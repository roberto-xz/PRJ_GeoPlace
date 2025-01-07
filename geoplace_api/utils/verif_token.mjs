
import jwt from "jsonwebtoken"
import 'dotenv/config'

export const verif_token = (token) => {
    if (token == undefined || token == null)
        return false
     try {
        let decode = jwt.verify(token, process.env.api_jkey);
        if (decode == undefined ) return false;
        return decode;

    }catch(e) {return false}
}