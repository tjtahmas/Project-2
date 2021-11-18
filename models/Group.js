const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Group extends Model { }

Group.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  group_name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  dun_master_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    }
  },
  members: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  meetings: {
    type: DataTypes.STRING(100),
  },
  campaign: {
    type: DataTypes.STRING(100),
  }
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'group',
}
);

module.exports = Group;