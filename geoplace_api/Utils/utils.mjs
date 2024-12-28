
import validator from "validator";

export const isValidEmail = (email) => {
    if (email == undefined ) return false;
    if (email.length < 4 ) return false;
    return validator.isEmail(email);
}

export const isValidHashSha1 = (hash) => {
    if (hash == undefined ) return false;
    if (hash.length < 15 ) return false;
    return validator.isHash(hash,'sha1')
}