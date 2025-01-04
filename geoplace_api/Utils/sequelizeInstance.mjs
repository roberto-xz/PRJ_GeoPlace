
import { Sequelize } from 'sequelize';
import {API_CONFIGS} from '../api.config.mjs'; 

export default new Sequelize (
    API_CONFIGS.MYSQL_DATA,
    API_CONFIGS.MYSQL_USER,
    API_CONFIGS.MYSQL_PASS,
    {
        host: API_CONFIGS.API_HOST,
        dialect: 'mysql',
        pool: {
            max: 15,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);