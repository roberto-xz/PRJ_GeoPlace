
import { models } from "../models/models.mjs";
import returns from "../returns/returns.mjs";
import { valid_updat } from "../utils/valid_updat.mjs";
import { verif_token } from "../utils/verif_token.mjs";

const updat = async (req,res) => {
    if (token = verif_token(req.body.user_token)) {
        const user_data = req.body.user_data;
        const data_check = valid_updat(user_data);
        if (data_check.has_errors)
            return returns.error_duplicate_entry(data_check.errors);

        let user = await models.Users.findOne({
            where: {user_email: token.email},
            atrributes: ['id','user_account_status']
        });

        if ( user && user.user_account_status == true) {
            [counts, _] = await models.Users.update({
                full_name: user_data.full_name,
                user_name: user_data.user_name,
                user_phone: user_data.user_phone,
                user_cpf: user_data.user_cpf,
                user_city: user_data.user_city,
                user_mapCords: user_data.user_cords,
                where: {id: user.id}
            });
            if (counts > 0 ) {
                res.json(returns.success());
                return
            }
            res.json(returns.error_operation_failed());
            return
        }
        res.json(returns.error_account_not_actived());
        return
    }
    res.json(returns.error_token_expired());
    return
}