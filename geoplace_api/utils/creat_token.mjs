
import jwt from "jsonwebtoken"
import 'dotenv/config'

export default (object, expire_at) => {
    return jwt.sign(object,process.env.api_jkey,{expiresIn: expire_at});
}