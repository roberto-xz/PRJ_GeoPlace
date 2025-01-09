
import { models } from "../models/models.mjs";
import returns from "../returns/returns.mjs";
import { valid_updat } from "../utils/valid_updat.mjs";
import { verif_token } from "../utils/verif_token.mjs";

//update user function
export const updat = async (req,res) => {
    const token = verif_token(req.body.user_token); 
    if (token) {
        const user_data  = req.body.user_data;
        const data_check = valid_updat(user_data);
 
        if (data_check == null || data_check.hasErros) {
            let json_res = {}
            if (data_check != null)
                data_check.invalids.forEach(element=>{
                    json_res[element] = user_data[element]
                });
            return res.status(400).send(json_res); // Bad Request
        }

        let user = await models.Users.findOne({
            where: {user_email: token.email},
            atrributes: ['id','user_account_status']
        });


        if ( user && user.user_account_status == true) {
            try {
                let [count,_] = await models.Users.update(user_data,{"where":{id: user.id}});
                if (count > 0 )
                    return res.status(204).send();
                
                return res.json(returns.error_operation_failed());

            }catch(error) {
                /*
                let json_return = {
                    errors: error.parent.code,
                    fields: error.fields
                } */
                return res.json(returns.error_duplicate_entry(error.fields));
            }
        }

        return res.status(400).send(); // Bad Request
    }
    return res.status(401).send() // Unauthorized
}