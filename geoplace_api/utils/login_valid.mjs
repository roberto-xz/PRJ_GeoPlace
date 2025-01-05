
import validator from "validator";

const isValidEmail = (email) => {
    if (email == undefined ) return false;
    if (email.length < 4 ) return false;
    return validator.isEmail(email);
}

const isValidHashSha1 = (hash) => {
    if (hash == undefined ) return false;
    if (hash.length < 15 ) return false;
    return validator.isHash(hash,'sha1')
}

export default (email, pass)=> {
     if ( !isValidEmail(email) || !isValidHashSha1(pass))
        return false
    return true
}