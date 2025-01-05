
import { Sequelize } from 'sequelize';
import 'dotenv/config'

export default new Sequelize (
    process.env.db_name,
    process.env.db_user,
    process.env.db_pass,

    {
        host: process.env.db_host,
        dialect: 'mysql',
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);