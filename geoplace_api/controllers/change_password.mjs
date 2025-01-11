
import { verif_token } from "../utils/verif_token.mjs"
import { verif_passw } from "../utils/verif_passw.mjs"
import { models } from "../models/models.mjs";

export const change_password = async (req,res) => {
    const token = verif_token(req.body.user_token);
    const passw = verif_passw(req.body.user_passw);

    if (!token || !passw)
        return res.sendStatus(401) // Unauthorized 
    
    const user = await models.Users.findOne({
        where: {user_email: token.email},
        attributes: ['id','user_account_status']
    })

    if (!user) return res.status(400).send(); // Bad Request
    if (!user.user_account_status) return res.status(401).send(); // Unauthorized

    user.user_pass = passw
    await user.save()
    return res.sendStatus(200);
}