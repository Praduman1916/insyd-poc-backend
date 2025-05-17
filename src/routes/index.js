const express = require('express');
const notificationRouter = require('./notificationRoutes');

const router = express.Router();

router.use('/notifications', notificationRouter);

module.exports = router;