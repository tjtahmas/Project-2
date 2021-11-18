const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class UserGroupCharacter extends Model { }

UserGroupCharacter.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_group_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'userGroup',
            key: 'id',
        },
    },
    character_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'character',
            key: 'id'
        },
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userGroupCharacter',
    }
);

module.exports = UserGroupCharacter;