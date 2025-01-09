
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import {models,starts} from './models/models.mjs'
import returns from './returns/returns.mjs';

//controllers
import {login} from './controllers/login.mjs';
import {sigin} from './controllers/sigin.mjs';
import {valid} from './controllers/valid.mjs';
import {ative} from './controllers/ative.mjs';
import {rtive} from './controllers/rtive.mjs';
import {delet} from './controllers/delet.mjs';
import {updat} from './controllers/updat.mjs';


const app = express();
app.use(express.json())
app.use(cors({
    origin: '*',  
    methods: 'GET,POST',  
    allowedHeaders: 'Content-Type,Authorization'
}));

app.post('/user-login',login); 
app.post('/user-sigin',sigin); 
app.post('/user-delet',delet); 
app.post('/user-update',updat); 
app.post('/user-check-token',valid); 
app.post('/user-active-account',ative); 
app.post('/user-get-new-active-scode',rtive); 

app.use((error,req,res,next)=> {
    return res.status(200).json(returns.error_json_format());
});


const startupAPI = async ()=> {
    // Testando instancia do sequelize
    if ( await starts()) {
        let api_host = process.env.api_host;
        let api_port = process.env.api_port;

        app.listen(api_port,api_host,()=> {
            console.log(`server running on ${api_host}:${api_port}`);
        })
    }  
    else
    console.log('[geoplace_api] Sequelize is not connected');
}

startupAPI();