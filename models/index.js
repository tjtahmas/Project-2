//import models
const Group = require('./Group');
const User = require('./User');
const Character = require('./Character');

//import sequelize to initiate groups
const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

//--------------Many-to-Many-to-Many---------------------

//Apply a Super Many-to-Many relationship between User and Group
const UserGroup = sequelize.define('UserGroup', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  }
}, {
  sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
});

User.belongsToMany(Group, {through: UserGroup});
Group.belongsToMany(User, { through: UserGroup});
UserGroup.belongsTo(User);
UserGroup.belongsTo(Group);
User.hasMany(UserGroup);
Group.hasMany(UserGroup);

//Apply a Super Many-to-Many relationship between Character and UserGroup
const UserGroupCharacter = sequelize.define('UserGroupCharacter', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  }
}, {
  sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
});
Character.belongsToMany(UserGroup, { through: UserGroupCharacter});
UserGroup.belongsToMany(Character, { through: UserGroupCharacter});
UserGroupCharacter.belongsTo(Character);
UserGroupCharacter.belongsTo(UserGroup);
Character.hasMany(UserGroupCharacter);
UserGroup.hasMany(UserGroupCharacter);

//---------------New Attempt---------------------

//Many-to-Many relationship for Groups to Users
// Group.belongsToMany(User, {
//   through: 'user_group_character',
//   foreignKey: 'user_id',
//   timestamps: false
// });

// //Many-to-Many relationship for Users to Groups
// User.belongsToMany(Group, {
//   through: 'user_group_character',
//   foreignKey: 'group_id',
//   timestamps: false
// });

// Character.belongsToMany(User,{
//   through: 'user_group_character',
//   foreignKey: 'character_id',
//   timestamps: false
// });

// ------------------Other Attempt (Deleted First Attempt)-------------------------

//I think this is necessary to establish Characters belong to Users
//but a User can have many Characters, maybe I'm wrong
// Character.belongsTo(User, {
//   foreignKey: 'user_id',
// });

//One-to-Many relationship between User to Characters
// User.hasMany(Character, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE',
// });

//As I said before, not sure if there needs to be a relationship between
//Character and Group. It doesn't 'belong' to the Group I don't think. 
//There is going to be a group_id foreign key though so there's definitely
//A relationship. Maybe it's just a hasOne() relationship to pass the foregin key
// Character.hasOne(Group, {
//   foreignKey: 'group_id',
//   onDelete: 'CASCADE',
// })

//This feels right. The Group model doesn't need to store character_id's. 
//They don't have ownership. I do think the Character should get deleted if the 
//Group is deleted. At least for now, since we don't want any orphaned 
//Character Models

/* Just found out you can do comments like this
The server runs without errors. I'll merge this branch in the 
morning and work on the seed data tomorrow morning. 
We should have working data by lunch. */

/* Tried merging the branch. Pretty sure Ian or Landon has to approve it. 
We'll see in the morning. */

module.exports = {
  Group,
  User,
  Character,
  UserGroup,
  UserGroupCharacter,
}