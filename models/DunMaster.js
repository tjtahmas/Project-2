const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class DunMaster extends Model { }

DunMaster.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        refernces: {
            model: 'user',
            key: 'id',
        }
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'dunMaster',
    }
);

module.exports = DunMaster;