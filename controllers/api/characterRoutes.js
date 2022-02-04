const router = require('express').Router();
const { json } = require('body-parser');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { Character, UserGroupCharacter } = require('../../models');

router.post('/', async (req, res) => {
    console.log(req.body)
    console.log(req.session.user_group_id)
    try {
        const newCharacter = await Character.create({
            character_name: req.body.name,
            class: req.body.char_class,
            race: req.body.race,
            description: req.body.description,
            link: req.body.link
        })

        console.log(newCharacter);
        const newUserGroupCharacter = await UserGroupCharacter.create({
            user_group_id: req.session.user_group_id,
            character_id: newCharacter.id
        })

        res.status(200).json(newCharacter, newUserGroupCharacter);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;