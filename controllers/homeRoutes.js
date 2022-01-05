const router = require('express').Router();
const res = require('express/lib/response');
const { User, Group } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req,res) => {
    try {
        const groupData = await Group.findAll({
            order: [['group_name', 'ASC']],
        });

        const groups = groupData.map((project) => project.get({ plain:true }));

        res.render('group', {
            groups,
            // Pass logged in flag to template
            // logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req,res) => {
    // If a session exists, redirect to the homepage
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});



module.exports = router;