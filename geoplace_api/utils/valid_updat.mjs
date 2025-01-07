
export const valid_updat = (user_json) => {
    const patterns = {
        user_fullname: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{10,120}$/,
        user_name:     /^[A-Za-z0-9_-]{1,120}$/,
        user_city:     /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,120}$/,
        user_cpf:      /^[0-9]{11}$/,
        user_phone:    /^[0-9]{8,16}$/,
        user_cords:    /^(-?\d{1,2}(\.\d+)?),\s*(-?\d{1,3}(\.\d+)?)$/,
    };

    const required_fields = Object.keys(patterns);
    const invalid_fields = [];

    for (const field of required_fields) {
        const value = user_json[field];

        if (!value || !patterns[field].test(value))
            invalid_fields.push(field);
    }

    return {
        has_errors: invalid_fields.length > 0,
        errors: invalid_fields,
    };
};
