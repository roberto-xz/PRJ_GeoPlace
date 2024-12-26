
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Users = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    full_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    user_name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true
    },

    user_email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },

    user_phone: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
        validate: {
            isNumeric: true,
            len: [10, 11] 
        }
    },

    user_pass: {
        type: DataTypes.STRING,
        allowNull: false
    },

    user_cpf: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
        validate: {
            isNumeric: true,
            len: [11, 11] 
        }
    },

    user_city: {
        type: DataTypes.STRING,
        allowNull: true
    },

    user_region: {
        type: DataTypes.STRING,
        allowNull: true
    },

    user_country: {
        type: DataTypes.STRING,
        allowNull: true
    },

    user_mapCords: {
        type: DataTypes.STRING,
        allowNull: true
    },

    user_account_status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false 
    },

    user_ads: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    tableName: 'users'
    // timestamps: true, 
});

Users.beforeCreate(async (user) => {
    if (user.user_pass) {
        const salt = await bcrypt.genSalt(10);
        user.user_pass = await bcrypt.hash(user.user_pass, salt);
    }
});

module.exports = Users;