const { User } = require('../models');

const userData = [
    {
        user_name: 'BARBarian47',
        email: 'barb@email.com',
        password: 'BARB1234',
    },
    {
        user_name: 'EdwardTheFirst',
        email: 'edward@email.com',
        password: 'EDWARD12',
    },
    {
        user_name: 'Delaney21',
        email: 'delaney@email.com',
        password: 'DELANEY1',
    },
    {
        user_name: 'Rishi96',
        email: 'rishi@email.com',
        password: 'RISHI123',
    },
    {
        user_name: 'Maggie65',
        email: 'maggie@email.com',
        password: 'MAGGIE12',
    },
    {
        user_name: 'Ross22',
        email: 'ross@email.com',
        password: 'ROSS1234',
    },
    {
        user_name: 'CurtisTheBrave',
        email: 'curtis@email.com',
        password: 'CURTIS12',
    },
    {
        user_name: 'JustTony',
        email: 'tony@email.com',
        password: 'TONY1234',
    },
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;