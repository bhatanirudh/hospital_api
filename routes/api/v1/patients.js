const express= require('express');

const router = express.Router();
const patientController = require('../../../controllers/api/v1/patient_api');
const reportController =require('../../../controllers/api/v1/report_api');
const {verifyToken} = require('../../../config/middleware');
const passport = require('passport');


 router.post('/register',verifyToken, patientController.register);

 
 // create report for patient id post
 router.post('/:id/create_report',verifyToken,reportController.create_report);
 
 // get all reports for id
 router.get('/:id/all_reports',  reportController.all_reports);


module.exports = router;