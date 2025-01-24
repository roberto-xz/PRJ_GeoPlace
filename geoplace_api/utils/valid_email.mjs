
import validator from "validator";

export const valid_email = (email)=>{
    if (email == undefined || email == null)
        return false
    
    return validator.isEmail(email)
}
