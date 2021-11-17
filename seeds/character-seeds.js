const { Character } = require('../models');

const characterData = [
    {
        //Character1
    },
    {
        //Character2
    },
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;