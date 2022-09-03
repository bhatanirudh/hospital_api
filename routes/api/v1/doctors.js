const express= require('express');

const router = express.Router();


const doctorController = require('../../../controllers/api/v1/doctor_api');

router.post('/login', doctorController.login);  // route for doctor login
router.post('/register', doctorController.register); // route for registering


module.exports = router;