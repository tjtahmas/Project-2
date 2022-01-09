const router = require('express').Router();
const res = require('express/lib/response');
const { User, Group, UserGroup, UserGroupCharacter, Character } = require('../models');
const withAuth = require('../utils/auth')

// GET group and other info for homepage
// I understand this part of the code is very clunky. I'm not using findByPk, which is the smarter way to retrieve this data. 
// I'll fix it eventually once I get the website working the way I want. For now, if it ain't broke don't fix it. 
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

                // Find all users for the group the user belongs to
                // In order to display member information along with group
                let newUserGroupData = await UserGroup.findAll({
                    where: { group_id: newGroupData.id }
                })

                // Find data for each user in the group the user belongs to
                for (j = 0; j < newUserGroupData.length; j++) {
                    let newGroupUserData = await User.findOne({
                        where: { id: newUserGroupData[j].user_id }
                    })

                    // If the user is the DM, don't add them to the member list. They already have a link in the group info
                    if (newGroupUserData.dataValues.id != dungeonMaster.id) {
                        member[j] = newGroupUserData;
                    }
                }
                newGroupData.dataValues.member = member;
                newGroupData.dataValues.members = member.length;

                groupData[i] = newGroupData;
            };

            groups = groupData.map((project) => project.get({ plain: true }));

        }

        res.render('homepage', {
            groups, loggedIn: req.session.logged_in
            // Pass logged in flag to template
            // logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET login page
router.get('/login', (req, res) => {
    // If a session exists, redirect to the homepage
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login', { loggedIn: req.session.logged_in });
});

// GET one group
router.get('/group/:id', withAuth, async (req, res) => {
    try {
        // Find Group and User data
        const groupData = await Group.findByPk(req.params.id, {
            include: [
                UserGroup,
                {
                    model: User,
                }
            ]
        });

        // Find user data for the user that matches the group's dungeon master id
        // In order to display Dungeon Master name along with group
        let dungeonMaster = await User.findOne({
            where: { id: groupData.dun_master_id }
        })
        groupData.dataValues.dungeonMaster = dungeonMaster.user_name;

        // WE'RE BEING INEFFICIENT AGAIN!!!
        // Find Character Data through UserGroup and UserGroupCharacter
        const groupCharacters = [];
        for (i = 0; i < groupData.users.length; i++){
            let newUGCData = await UserGroupCharacter.findByPk(groupData.users[i].userGroup.id, {
                include: [
                    Character
                ]
            });
            if (newUGCData){
                groupCharacters[i] = newUGCData.character;
                groupCharacters[i].user_name = groupData.users[i].user_name;
                groupCharacters[i].user_id = groupData.users[i].id;
            }
        }

        console.log(groupCharacters)

        const group = groupData.get({ plain: true });
        const isDM = (group.dun_master_id == req.session.user_id);

        res.render('group', { group, loggedIn: req.session.logged_in, isDM, groupCharacters})
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one user
// This is how you properly find additional data using findByPk
// This is the whole point of using a relational data, i.e. MySQL
// Glad I found it out but boy this would've been nice when I was making the homepage
// Literally did all that findByPk work myself. Ridiculous. Rookie moves.
// Learned a valuable lesson though. Trust those PKs. 
router.get('/user/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [
                UserGroup,
                {
                    model: Group
                }
            ]
        });

        console.log(userData.groups[0]);

        const user = userData.get({ plain: true });

        res.render('user', { user, loggedIn: req.session.logged_in })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;