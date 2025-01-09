
import 'dotenv/config'
import jwt from 'jsonwebtoken'

export const valid = (req,res) => {
    if (req.body.user_token == undefined )
        return res.status(400).send(); // Bad Request

    jwt.verify(req.body.user_token,process.env.api_jkey,
    (err, decode) => {
        return ( decode == undefined ) 
            ? res.status(401).send() // Unauthorized
            : res.status(200).send() // 200 - Ok
    });
}