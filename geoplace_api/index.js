
import {sequelize}  from './sequelize.mjs';
// import { UserModel } from './models/user_model.mjs';
import {ApiErros}   from './Erros/ApiErros.mjs'
import express from 'express'
import cors from 'cors'
import { API_CONFIGS } from './api.config.mjs';

//controllers
import { loginController } from './controllers/login_controller.mjs';


const app = express();
app.use(express.json())
app.use(cors({
    origin: '*',  
    methods: 'GET,POST',  
    allowedHeaders: 'Content-Type,Authorization'
}));

app.post('/login',loginController);


app.use((error,req,res,next)=> {
    return res.status(error.status).json({message:`Internal Server Error: ${error.type}`});
});


const startSequelize = async ()=> {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

    }catch(error){ 
        throw new ApiErros('Server Internal Error - Mysql-Error',403);
    }
}

const startExpress = ()=> {
    app.listen(API_CONFIGS.API_PORT,API_CONFIGS.API_HOST,()=> {
        console.log(`server running on :${API_CONFIGS.API_HOST}:${API_CONFIGS.API_PORT}`);
    })
}

startSequelize();
startExpress();