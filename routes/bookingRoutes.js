const express = require('express');
const { bookActivity,getBookings} = require('../controllers/bookingsController');
const router = express.Router();
const {auth} =require('../middleware/auth');

router.post('/book-activity',auth,bookActivity);
router.get('/get-bookings',auth,getBookings);

module.exports = router;
