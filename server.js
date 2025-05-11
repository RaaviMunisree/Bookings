const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const connectDB = require('./config/db');
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
connectDB();

const authRoutes=require('./routes/authRoutes');
app.use('/auth',authRoutes);

const activityRoutes=require('./routes/activityRoutes');
app.use('/activities',activityRoutes);

const bookingRoutes=require('./routes/bookingRoutes');
app.use('/bookings',bookingRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
