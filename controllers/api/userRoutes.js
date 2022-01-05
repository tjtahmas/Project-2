const router = require('express').Router();
const req = require('express/lib/request');
const res = require('express/lib/response');
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    try {
        // Find user that matches posted email address
        const userData = await User.findOne({ where: { user_name: req.body.username } });

        console.log(req.body)
        console.log(userData);

        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, try again' });
            return;
        }

        //Verify password
        const validPassword = await userData.checkPassword(req.body.password);

        console.log(validPassword)

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, try again'});
            return;
        }

        //Create session variables based on logged in user
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!'});
        });
    }

    catch (err) {
        res.status(400).json(err);
    }    
});

router.post('/logout', (req,res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;