const router = require('express').Router();
const res = require('express/lib/response');
const { User, Group, UserGroup } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) => {

    let groups = [];

    try {
        const userGroupData = await UserGroup.findAll({
            where: { user_id: req.session.user_id }
        });

        if (userGroupData) {
            const groupData = [];

            for (i = 0; i < userGroupData.length; i++) {
                let newGroupData = await Group.findOne({
                    where: { id: userGroupData[i].group_id }
                })

                let dungeonMaster = await User.findOne({
                    where: { id: newGroupData.dun_master_id }
                })

                newGroupData.dataValues.dungeonMaster = dungeonMaster.user_name;

                groupData[i] = newGroupData;
            };

            groups = groupData.map((project) => project.get({ plain: true }));

        }

        res.render('group', {
            groups, loggedIn: req.session.logged_in
            // Pass logged in flag to template
            // logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If a session exists, redirect to the homepage
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login', {loggedIn: req.session.logged_in});
});



module.exports = router;