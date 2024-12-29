
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

export const CreatMagicNumber = (len)=> {
    let magic = '';
    for (let x=0; x<len; x++) 
        magic += (Math.floor(Math.random()*9)+1);
    
    return magic
}