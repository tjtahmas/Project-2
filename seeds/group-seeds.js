const { Group } = require('../models');

const groupData = [
    {
        group_name: 'GoblinMirkerSquad',
        dun_master_id: 1,
        members: 4,
        meetings: 'Wednesdays @ 6:30PM EST',
        campaign: 'Claimed By Nature',
    },
    {
        group_name: 'AllEdwards',
        dun_master_id: 2,
        members: 7,
        meetings: 'Thursdays @ 9:00PM PT',
        campaign: 'The Wolves of Welton',
    },
    {
        group_name: 'GroupName123',
        dun_master_id: 7,
        members: 5,
        meetings: 'Tuesdays @ 8PM EST',
        campaign: 'The Lost Mines of Phandelver',
    },
    {
        group_name: 'MafiosoBrigade',
        dun_master_id: 8,
        members: 6,
        meetings: 'Sundays @ 2:00PM EST',
        campaign: 'Storm King Thunder',
    },
];

const seedGroups = () => Group.bulkCreate(groupData);

module.exports = seedGroups;