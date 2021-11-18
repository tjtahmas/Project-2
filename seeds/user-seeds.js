const { User } = require('../models');

const userData = [
    {
        //User1
    },
    {
        //User2
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;