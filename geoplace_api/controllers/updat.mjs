
import { models } from "../models/models.mjs";
import returns from "../returns/returns.mjs";
import { valid_updat } from "../utils/valid_updat.mjs";
import { verif_token } from "../utils/verif_token.mjs";

//update user function
export const updat = async (req, res) => {
    const token = verif_token(req.body.user_token);
    if (!token) return res.status(401).send(); // Unauthorized

    const user_data = req.body.user_data;
    const data_check = valid_updat(user_data);

    if (!data_check || data_check.hasErros) {
        let json_res = {};
        if (data_check) {
            data_check.invalids.forEach(element => {
                json_res[element] = user_data[element];
            });
        }
        return res.status(400).send(json_res); // Bad Request
    }

    const user = await models.Users.findOne({
        where: { user_email: token.email },
        attributes: ['id', 'user_account_status']
    });

    if (!user) return res.status(400).send(); // Bad Request
    if (!user.user_account_status) return res.status(401).send(); // Unauthorized

    try {
        const [count, _] = await models.Users.update(user_data, { where: { id: user.id } });
        if (count === 0) return res.status(409).send(); // Conflict
        return res.status(204).send(); // No Content
    
    }catch (error) {
        return res.status(500).send();
    }
};
