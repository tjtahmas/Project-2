const router = require('express').Router();
const userRoutes = require('./userRoutes');
const groupRoutes = require('./groupRoutes');
const characterRoutes = require('./characterRoutes');

router.use('/users', userRoutes);
router.use('/groups', groupRoutes);
router.use('/characters', characterRoutes);

module.exports = router;