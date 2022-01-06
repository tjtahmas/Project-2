const { UserGroup } = require('../models');

const userGroupData = [
    {
        user_id: 1,
        group_id: 1,
    },
    {
        user_id: 2,
        group_id: 2,
    },
    {
        user_id: 3,
        group_id: 1,
    },
    {
        user_id: 4,
        group_id: 1,
    },
    {
        user_id: 5,
        group_id: 1,
    },
    {
        user_id: 6,
        group_id: 1,
    },
    {
        user_id: 7,
        group_id: 3,
    },
    {
        user_id: 8,
        group_id: 4,
    },
    // EVERYTHING BELOW THIS IS THE DEMO USER'S GROUPS
    {
        user_id: 9,
        group_id: 1,
    },
    {
        user_id: 9,
        group_id: 2,
    },
    {
        user_id: 9,
        group_id: 3,
    },
    {
        user_id: 9,
        group_id: 4,
    },
];

const seedUserGroups = () => UserGroup.bulkCreate(userGroupData);

module.exports = seedUserGroups;