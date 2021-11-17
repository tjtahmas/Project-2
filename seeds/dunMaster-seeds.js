const { DunMaster } = require('../models');

const dunMasterData = [
    {
        //DunMaster1
    },
    {
        //DunMaster2
    },
];

const seedDunMasters = () => DunMaster.bulkCreate(dunMasterData);

module.exports = seedDunMasters;