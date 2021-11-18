const { UserGroupCharacter } = require('../models');

const userGroupCharacterData = [
    {
        character_id: 1,
        user_group_id: 3,
    },
    {
        character_id: 2,
        user_group_id: 4,
    },
    {
        character_id: 3,
        user_group_id: 5,
    },
    {
        character_id: 4,
        user_group_id: 6,
    },
];

console.log(userGroupCharacterData)

const seedUserGroupCharacters = () => UserGroupCharacter.bulkCreate(userGroupCharacterData);

module.exports = seedUserGroupCharacters;