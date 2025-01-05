
import sequelize from '../src/sequelize.mjs';
import userModel from './models/users.mjs'
      
const models = {
    Users: userModel(sequelize)
}

const starts = async ()=> {
    try {
        await sequelize.authenticate()
        await sequelize.sync({force: true});
        return true;
    }catch(er){ return false;}
}

export {models, starts }