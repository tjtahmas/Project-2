const { UserGroupCharacter, User } = require('../models');

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
    // YOU WILL HAVE TO ADD A USER_GROUP_ID FOR THE DEMO USER IN A POST ROUTE
];

const seedUserGroupCharacters = () => UserGroupCharacter.bulkCreate(userGroupCharacterData);

module.exports = seedUserGroupCharacters;