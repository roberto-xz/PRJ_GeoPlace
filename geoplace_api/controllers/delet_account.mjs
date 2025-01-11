

import { models } from '../models/models.mjs';
import { verif_token } from "../utils/verif_token.mjs";

export const delet_account = async (req, res) => {
    const user_token = verif_token(req.body.user_token);
    if (user_token) {
        const user = await models.Users.findOne({
            where: { id: decode.uuid }
        });

        if (user == null) return res.status(404).send() // Resource Not Found
        if (user.destroy()) 
            return res.status(204).send();
        
        res.status(500).send(); // Internal Server Error
        return;
    }
    res.status(401).send() // Unauthorized
    return;
}