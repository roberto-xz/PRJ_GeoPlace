
require('dotenv').config()
const express = require('express')
const sequelize = require('./sequelize');
const Users = require('./models/user');
const crypto = require("crypto");
const env = process.env;
const app = express();
let SESSIONS = {};

app.use(express.json());
app.post('/login',async (req, res)=> {
    let user_mail = req.body.user_mail; // sanatizar
    let user_hash = req.body.user_hash; // sanatizar

    if ( user_hash != undefined && user_mail != undefined ) {
        const user = await Users.findOne({
            where: {
                user_email: user_mail,
                user_pass:  user_hash
            },
            attributes: ['id'],
        });

        if ( user ) {
            let uuid = crypto.randomUUID().replaceAll('-','');
            let new_session = {
                type: 'login',
                createdAt: new Date().getTime(),
                user_id: user.id, 
                user_browser: req.headers['user-agent'],
                user_adress: req.headers['host'],
                toke_validate: 2  // at in days
            }
            SESSIONS[uuid] = new_session; // isso vai comsumir muita memoria, apenas para testes
            res.send(`{code: 200, toke: ${uuid}}`);
            return;
        } 
        res.send('{code: 301, token: "none"}');
        return;
    }
})



app.listen(env.API_PORT,env.API_HOST, async ()=> {
    console.log('connecting: Mysql-server:');
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Mysql-server: connected');
    }catch(error) {
        console.log('Mysql-server: not connected');
        console.log(error);
    }
    console.log(`geoplace_API running: ${env.API_HOST}:${env.API_PORT}`);
})



setInterval(() => {
    console.clear();
    console.table(SESSIONS);
}, 1000);