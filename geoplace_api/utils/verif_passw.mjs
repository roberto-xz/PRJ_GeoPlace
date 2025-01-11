
import validator from "validator";

export const verif_passw = (password)=>{
    if (password == undefined || password == null)
        return false
    
    return validator.isSha1(password)
}