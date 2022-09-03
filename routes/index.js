const express = require('express');
const router = express.Router();

//const home= require('../controllers/api/v1/home_api');

router.use('/api', require('./api'));

module.exports = router;