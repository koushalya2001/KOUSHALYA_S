const path = require('path');
const express = require('express');
const router = express.Router();
const leadercontroller = require('../controller/leadersuccess');
router.get('/display',leadercontroller.display);
module.exports = router;
