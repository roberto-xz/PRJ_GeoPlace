
import express from 'express'
import cors from 'cors'
import { API_CONFIGS } from './api.config.mjs';
import {models,sequelize, startSequelize} from './models/models.mjs'

//controllers
import {login} from './controllers/login.mjs';
import {sigin} from './controllers/sigin.mjs';
import {valid} from './controllers/valid.mjs';
import {ative} from './controllers/ative.mjs';
import returns from './returns/returns.mjs';


const app = express();
app.use(express.json())
app.use(cors({
    origin: '*',  
    methods: 'GET,POST',  
    allowedHeaders: 'Content-Type,Authorization'
}));

app.post('/login',login);
app.post('/sigin',sigin);
app.post('/valid',valid);
app.post('/ative',ative);

app.use((error,req,res,next)=> {
    return res.status(200).json(returns.error_json_format());
});



const startupAPI = async ()=> {
    if (await startSequelize()){
        app.listen(API_CONFIGS.API_PORT,API_CONFIGS.API_HOST,()=> {
            console.log(`server running on :${API_CONFIGS.API_HOST}:${API_CONFIGS.API_PORT}`);
        })
    }  
    else
        console.log('[geoplace_api] Sequelize is not connected, view mysql is up');
}

startupAPI();