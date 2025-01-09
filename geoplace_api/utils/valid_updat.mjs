
export const valid_updat = (user_json) => {
    const patterns_ = {
        full_name: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{10,120}$/,
        user_name:     /^[A-Za-z0-9_-]{1,120}$/,
        user_city:     /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,120}$/,
        user_cpf:      /^[0-9]{11}$/,
        user_phone:    /^[0-9]{8,16}$/,
        user_cords:    /^(-?\d{1,2}(\.\d+)?),\s*(-?\d{1,3}(\.\d+)?)$/,
    };

    if (user_json instanceof Object) {
        const data_key = Object.keys(user_json);
        const invalids = [];
        
        if (data_key.length > 0 ) {
            for (let item of data_key) {
                let value = user_json[item];
                let teste = patterns_[item];
                if (teste == undefined || teste.test(value) == false)
                    invalids.push(item);
            }
            return {
                hasErros: invalids.length > 0,
                invalids
            }
        }
    }
    return null;
};
