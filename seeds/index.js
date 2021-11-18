const seedUsers = require('./user-seeds');
const seedGroups = require('./group-seeds');
const seedCharacters = require('./character-seeds');
const seedUserGroups = require('./user-group-seeds');
const seedUserGroupCharacters = require('./user-group-character-seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedGroups();
  console.log('\n----- GROUPS SEEDED -----\n');

  await seedCharacters();
  console.log('\n----- CHARACTERS SEEDED -----\n');

  await seedUserGroups();
  console.log('\n----- USERGROUPS SEEDED -----\n');

  await seedUserGroupCharacters();
  console.log('\n----- USERGROUPCHARACTERS SEEDED -----\n');

  process.exit(0);
};

seedAll();