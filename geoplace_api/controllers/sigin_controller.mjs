
import { isValidEmail, isValidHashSha1,CreatMagicNumber } from "../Utils/utils.mjs";
import {UserModel}  from "../models/user_model.mjs";
import nodemailer from "nodemailer";
import dotenv from 'dotenv'
dotenv.config();

export const siginController = async (req, res)=> {
    let user_mail = req.body.user_mail;
    let user_pass = req.body.user_pass;
 

    if (!isValidEmail(user_mail) || !isValidHashSha1(user_pass))
        return res.status(200).json({code: 100, message: 'Invalid Request Format'});


    const userExists = await UserModel.findOne({
        where: { user_email: user_mail,},
        attributes: ['id']
    }) !== null;
    
    if (userExists)
        return res.status(200).json({code: 102, message: 'Duplicate Data',type: 'email'});

    try {
        let magicCode = CreatMagicNumber(6);

        const newUser = UserModel.create({
            user_email: user_mail,
            user_pass:  user_pass,
            user_code:  magicCode
        });

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user:process.env.geoplace_mail,
                pass:process.env.geoplace_pass
            }
        });
        
        transport.sendMail({
            from: process.env.geoplace_mail,
            to: user_mail,
            subject: "Geoplace (Codigo de Validação)",
            text: `Seu código de validação: ${magicCode}`
        }).then(()=>{
            res.status(200).json({code:200,message: "ok"})
        }).catch((e)=>{
            console.log(e)
            res.status(200).json({code:104,message: "Erro On Send Validation Code"})
        });

    }catch(e) {
        res.status(200).json({code:103,message: "Erro On Register New User"})
    }
}