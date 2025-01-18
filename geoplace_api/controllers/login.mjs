
import valid_login from '../utils/login_valid.mjs'
import creat_token from '../utils/creat_token.mjs'
import {models}    from '../models/models.mjs'

export const login = async (req, res)=> {
    let user_mail = req.body.user_mail;
    let user_pass = req.body.user_pass;

    if (valid_login(user_mail,user_pass)) {
        const user = await models.Users.findOne({
            where: {
                user_email: user_mail,
                user_pass:  user_pass
            },
            attributes:['id','user_account_status'],
        });

        if (!user) return res.sendStatus(404) // usuário não encontrado
        if (!user.user_account_status) 
            return res.sendStatus(401); // Unauthorized

        let user_data = {
            type: 'login',
            uuid: user.id, 
            email: user_mail
        }
        let token = creat_token(user_data, '24h');
        res.json(token); // 200 - Ok
        return;
    }
    
    res.status(400).send(); // Bad Request
    return
}
