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

        console.log(userGroupData);

        if (userGroupData) {
            const groupData = [];

            for (i = 0; i < userGroupData.length; i++) {
                let newGroupData = await Group.findOne({
                    where: { id: userGroupData[i].group_id }
                })
                groupData[i] = newGroupData;
            };

            groups = groupData.map((project) => project.get({ plain: true }));
        }



        res.render('group', {
            groups,
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

    res.render('login');
});



module.exports = router;