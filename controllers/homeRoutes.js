const router = require('express').Router();
const res = require('express/lib/response');
const { User, Group } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', async (req,res) => {
    try {
        const userData = await User.findAll({
            attributes: { excluse: ['password']},
            order: [['user_name', 'ASC']],
        });

        const users = userData.map((project) => project.get({ plain:true }));

        res.render('login', {
            users,
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

// router.get('/group', (req,res => {
//     try {
//         const groupData = await Group.findAll({
//             where: {

//             }
//         })
//     }
// }))

module.exports = router;