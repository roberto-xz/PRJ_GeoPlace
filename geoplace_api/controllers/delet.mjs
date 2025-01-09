
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { models } from '../models/models.mjs';

export const delet = async (req, res) => {
    // usar verif_token
    let user_token = req.body.user_token;
    if  (user_token == null )
        return res.status(401).send() // Unauthorized

    try {
        let decode = jwt.verify(user_token, process.env.api_jkey);
        if (decode == undefined ) 
           return res.status(401).send()
        
        const user = await models.Users.findOne({
            where: { id: decode.uuid }
        });

        if (user == null) return res.status(404).send() // Resource Not Found
        if (user.destroy()) 
            return res.status(204).send();

        console.log('[geoplace_api] Delet function:: /delet');
        return res.status(500).send();
    }catch(e) {
        console.log('[geoplace_api] Delet function:: /delet');
        return res.status(500).send();
    }
}