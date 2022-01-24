const { Group } = require('../models');

const groupData = [
    {
        group_name: 'GoblinMirkerSquad',
        dun_master_id: 1,
        // members: 4,
        meetings: 'Wednesdays @ 6:30PM EST',
        campaign: 'Claimed By Nature',
        announcement: 'We need to make sure our schedules are clear for the meeting time. Someone please pick a healer. Also, I am not doing encumberance this time. You will have to keep track of rations and ammo though.',
    },
    {
        group_name: 'AllEdwards',
        dun_master_id: 2,
        // members: 7,
        meetings: 'Thursdays @ 9:00PM PT',
        campaign: 'The Wolves of Welton',
        announcement: 'TO ARMS FELLOW EDWARDS! Also when you see a dragon, look at what color it is and how old. That will tell you a lot about how to deal with it.',
    },
    {
        group_name: 'GroupName123',
        dun_master_id: 7,
        // members: 5,
        meetings: 'Tuesdays @ 8PM EST',
        campaign: 'The Lost Mines of Phandelver',
        announcement: 'Try to make sure you buy a full dice set before we begin. If you do not have dice, google has a roll feature you can use. But the dice make better noises.',
    },
    {
        group_name: 'MafiosoBrigade',
        dun_master_id: 8,
        // members: 6,
        meetings: 'Sundays @ 2:00PM EST',
        campaign: 'Storm King Thunder',
        announcement: 'There are way too many people in this group. Someone please leave.'
    },
];

const seedGroups = () => Group.bulkCreate(groupData);

module.exports = seedGroups;