const router = require('express').Router();
const characterRoutes = require('./character-routes');
const dunMasterRoutes = require('./dunMaster-routes');
const groupRoutes = require('./group-routes');
const userRoutes = require('./user-routes');

router.use('/character-routes', characterRoutes);
router.use('./dunMaster-routes', dunMasterRoutes);
router.use('./group-routes', groupRoutes);
router.use('./user-routes', userRoutes);

module.exports = router;