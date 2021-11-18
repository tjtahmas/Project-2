const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class UserGroup extends Model { }

UserGroup.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    group_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'group',
            key: 'id'
        },
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userGroup',
    }
);

module.exports = UserGroup;