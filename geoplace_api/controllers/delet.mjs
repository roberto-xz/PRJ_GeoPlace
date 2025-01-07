
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { models } from '../models/models.mjs';
import returns from '../returns/returns.mjs';

export const delet = async (req, res) => {
    let user_token = req.body.user_token;
    if  (user_token == null )
        return res.json(returns.error_invalid_request());

    try {
        let decode = jwt.verify(user_token, process.env.api_jkey);
        if (decode == undefined ) 
            return res.json(returns.error_token_expired());
        
        const user = await models.Users.findOne({
            where: { id: decode.uuid }
        });

        if (user && user.destroy()) 
            return res.json(returns.success());
    }catch(e) {}
    
    // para evitar enumeração de usuários.
    res.json(returns.error_token_expired())
    return
    
}