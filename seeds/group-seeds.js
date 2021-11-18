const { Group } = require('../models');

const groupData = [
    {
        //Group1
    },
    {
        //Group2
    },
];

const seedGroups = () => Group.bulkCreate(groupData);

module.exports = seedGroups;