const router = require('express').Router();
const res = require('express/lib/response');
const { User, Group, UserGroup } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) => {

    let groups = [];

    try {
        // Identify which groups the user belongs to
        const userGroupData = await UserGroup.findAll({
            where: { user_id: req.session.user_id }
        });

        console.log(userGroupData);

        if (userGroupData) {
            const groupData = [];

            for (i = 0; i < userGroupData.length; i++) {
                let member = [];

                // Find data for each group the user belongs to
                let newGroupData = await Group.findOne({
                    where: { id: userGroupData[i].group_id }
                })

                // Find user data for the user that matches the group's dungeon master id
                // In order to display Dungeon Master name along with group
                let dungeonMaster = await User.findOne({
                    where: { id: newGroupData.dun_master_id }
                })
                newGroupData.dataValues.dungeonMaster = dungeonMaster.user_name;
                newGroupData.dataValues.dungeonMasterId = dungeonMaster.id;

                // Find all users for each group the user belongs to
                // In order to display member information along with group
                let newUserGroupData = await UserGroup.findAll({
                    where: { group_id: newGroupData.id}
                })

                // Find data for each user in groups the user belongs to
                
                for (j = 0; j < newUserGroupData.length; j++){
                    let newGroupUserData = await User.findOne({
                        where: { id: newUserGroupData[j].user_id }
                    })
                    
                    member[j] = newGroupUserData;
                    console.log(member[j])
                }
                newGroupData.dataValues.member = member;
                newGroupData.dataValues.members = member.length;
                
                groupData[i] = newGroupData;
            };

            groups = groupData.map((project) => project.get({ plain: true }));
            //console.log(groups.member)

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