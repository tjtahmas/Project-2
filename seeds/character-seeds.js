const { Character } = require('../models');

const characterData = [
    {
        // user_id: 3,
        // group_id: 1,
        character_name: 'CaroleTheBrave',
        class: 'Bard',
        race: 'Halfling',
        description: 'A graduate of the Belvedere Barding Academy, eager for her first adventure!',
    },
    {
        // user_id: 4,
        // group_id: 1,
        character_name: 'PayneJohnson',
        class: 'Fighter',
        race: 'Half-Orc',
        description: 'Champion of the Ashport Coliseum, looking for the next step in my storied career.',
    },
    {
        // user_id: 5,
        // group_id: 1,
        character_name: 'BuckDancer',
        class: 'Warlock',
        race: 'Gnome',
        description: 'Former cult leader and star inmate at the Oremar Mountain Prison.',
    },
    {
        // user_id: 6,
        // group_id: 1,
        character_name: 'CyrusRodrigo',
        class: 'Ranger',
        race: 'Elf',
        description: 'A reclusive woodsman with a mysterious past, haunted by his former life...',
    },
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;