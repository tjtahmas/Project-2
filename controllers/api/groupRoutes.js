const router = require('express').Router();
const { json } = require('body-parser');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { Group, UserGroup } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newGroup = await Group.create({
            group_name: req.body.group_name,
            dun_master_id: req.session.user_id,
            meetings: req.body.meetings,
            campaign: req.body.campaign
        })

        console.log(newGroup);
        const newUserGroup = await UserGroup.create({
            user_id: req.session.user_id,
            group_id: newGroup.id
        })

        res.status(200).json(newGroup);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;