const express = require('express');
const { addActivity,getActivities } = require('../controllers/activityController');
const router = express.Router();
const {auth} =require('../middleware/auth')

router.post('/add-activity',auth,addActivity);
router.get('/get-activities', getActivities);

module.exports = router;
