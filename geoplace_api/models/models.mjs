
import sequelize from '../Utils/sequelizeInstance.mjs';
import userModel from './users.mjs'

const models = {
    Users: userModel(sequelize)
}

const startSequelize = async ()=>{
    try {
        await sequelize.authenticate()
        await sequelize.sync({force: true});
        return true;
    }catch(er){ return false;}
}

export {models,sequelize, startSequelize}