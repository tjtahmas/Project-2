const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Character extends Model { }

Character.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    character_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    class: {
        type: DataTypes.STRING,
    },
    race: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    link: {
        type: DataTypes.STRING,
        defaultValue: 'https://www.dndbeyond.com/',
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'character',
    }
);

module.exports = Character;