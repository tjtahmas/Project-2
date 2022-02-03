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

router.put('/update/:id', async (req, res) => {
    try {
        const updateGroup = await Group.update({
            campaign: req.body.campaign,
            meetings: req.body.meetings,
            announcement: req.body.announcement   
        }, {where: { id: req.params.id} })

        res.status(200).json(updateGroup);
    }
    catch(err) { 
        res.status(500).json(err);
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const deleteGroup = await Group.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!deleteGroup) {
            res.status(404).json({ message: 'No group found with that id.'});
            return;
        }

        res.status(200).json(deleteGroup);

    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;