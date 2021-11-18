const { User } = require('../models');

const userData = [
    {
        user_name: 'BARBarian47',
        password: 'BARB',
    },
    {
        user_name: 'EdwardTheFirst',
        password: 'EDWARD',
    },
    {
        user_name: 'Delaney21',
        password: 'DELANEY',
    },
    {
        user_name: 'Rishi96',
        password: 'RISHI',
    },
    {
        user_name: 'Maggie65',
        password: 'MAGGIE',
    },
    {
        user_name: 'Ross22',
        password: 'ROSS',
    },
    {
        user_name: 'CurtisTheBrave',
        password: 'CURTIS',
    },
    {
        user_name: 'JustTony',
        password: 'TONY',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;