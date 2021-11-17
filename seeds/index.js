const seedUser = require('./user-seeds');
const seedGroup = require('./group-seeds');
const seedDunMaster = require('./dunMaster-seeds');
const seedCharacter = require('./character-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedGroups();
  console.log('\n----- GROUPS SEEDED -----\n');

  await seedDunMasters();
  console.log('\n----- DUNMASTERS SEEDED -----\n');

  await seedCharacters();
  console.log('\n----- CHARACTERS SEEDED -----\n');

  process.exit(0);
};

seedAll();