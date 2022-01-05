//import models
const Group = require('./Group');
const User = require('./User');
const Character = require('./Character');
const UserGroup = require('./UserGroup');
const UserGroupCharacter = require('./UserGroupCharacter');

//import sequelize to initiate groups
const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

//--------------Many-to-Many-to-Many---------------------

//Apply a Super Many-to-Many relationship between User and Group

User.belongsToMany(Group, {through: UserGroup});
Group.belongsToMany(User, { through: UserGroup});
UserGroup.belongsTo(User);
UserGroup.belongsTo(Group);
User.hasMany(UserGroup);
Group.hasMany(UserGroup);

//Apply a Super Many-to-Many relationship between Character and UserGroup
Character.belongsToMany(UserGroup, { through: UserGroupCharacter});
UserGroup.belongsToMany(Character, { through: UserGroupCharacter});
UserGroupCharacter.belongsTo(Character);
UserGroupCharacter.belongsTo(UserGroup);
Character.hasMany(UserGroupCharacter);
UserGroup.hasMany(UserGroupCharacter);


module.exports = {
  Group,
  User,
  Character,
  UserGroup,
  UserGroupCharacter,
}