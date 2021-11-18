//import models
const Group = require('./Group');
const User = require('./User');
const DunMaster = require('./DunMaster');
const Character = require('./Character');

//---------------New Attempt---------------------

//Many-to-Many relationship for Groups to Users
Group.belongsToMany(User, {
  through: 'group_user',
  as: 'users',
  foreignKey: 'group_id',
});

//Many-to-Many relationship for Users to Groups
User.belongsToMany(Group, {
  through: 'group_user',
  as: 'groups',
  foreignKey: 'user_id',
});

//I think this is necessary to establish Characters belong to Users
//but a User can have many Characters, maybe I'm wrong
Character.belongsTo(User, {
  foreignKey: 'user_id',
});

//One-to-Many relationship between User to Characters
User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

//As I said before, not sure if there needs to be a relationship between
//Character and Group. It doesn't 'belong' to the Group I don't think. 
//There is going to be a group_id foreign key though so there's definitely
//A relationship. Maybe it's just a hasOne() relationship to pass the foregin key
Character.hasOne(Group, {
  foreignKey: 'group_id',
  onDelete: 'CASCADE',
})

//This feels right. The Group model doesn't need to store character_id's. 
//They don't have ownership. I do think the Character should get deleted if the 
//Group is deleted. At least for now, since we don't want any orphaned 
//Character Models

/* Just found out you can do comments like this
The server runs without errors. I'll merge this branch in the 
morning and work on the seed data tomorrow morning. 
We should have working data by lunch. */

// --------------Old Attempt---------------------
//Character belongs to User
// Character.belongsTo(User, {
//   foreignKey: 'user_id'
// })

// //User has many Characters
// User.hasMany(Character, {

// })

// //DunMaster belongs to Group OR IS IT THE OTHER WAY AROUND???
// DunMaster.belongsTo(Group, {
//   foreignKey: 'dunMaster_id'  
// })

// //User has many Groups
// User.hasMany(Group, {
//   foreignKey: ''
// })

// //Group has many Users
// Group.hasMany(User, {
//   foreignKey: ''
// })

//

module.exports = {
  Group,
  User,
  DunMaster,
  Character,
}