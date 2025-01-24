
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import {models,starts} from './models/models.mjs'


//controllers
import {login} from './controllers/login.mjs';
import {sigin} from './controllers/sigin.mjs';
import {check_token} from './controllers/check_token.mjs';
import {active_account} from './controllers/ative_account.mjs';
import {get_new_scode} from './controllers/get_new_scode.mjs';
import {delet_account} from './controllers/delet_account.mjs';
import {update_account} from './controllers/update_accout.mjs';
import {change_password} from './controllers/change_password.mjs';
import {recovery_pwd} from './controllers/recovery_password.mjs';
import {update_pwd} from './controllers/update_password.mjs';

const app = express();
app.use(express.json())
app.use(cors({
    origin: '*',  
    methods: '*',  
    allowedHeaders: '*'
}));
app.post('/login',login); 
app.post('/sigin',sigin); 
app.post('/recovery-pwd',recovery_pwd)
app.post('/update-pwd',update_pwd)
app.put('/ative',active_account); 
app.delete('/user-delet',delet_account); 
app.patch('/user-update',update_account); 
app.put('/user-change-password',change_password); 
app.post('/check-token',check_token); 
app.post('/get-new-scode',get_new_scode); 

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
//export default app;
