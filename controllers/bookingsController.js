const Activity=require('../models/Activity');
const Bookings=require('../models/Bookings');
const User=require('../models/User');
const { validationResult } = require('express-validator'); // For input validation

exports.bookActivity=async(req,res)=>{
    const {_id,id}=req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try{
        const existing=await Activity.find({id});
        if(existing.length==0)
        return res.json({message:"Activity doesnot exist"});
        const existingBooking=await Bookings.find({id});
        if(existingBooking.length>0)
        return res.json({message:"Activity already booked"});
        const newBooking=await Bookings.create({User:_id,id});
        await newBooking.save();
        return res.json({newBooking});
    }catch(err){
        return res.status(500).json({message:"Server error"});
    }
}
exports.getBookings=async(req,res)=>{
    const {_id}=req.body;
    try{
        const existing=User.findById({_id});
        if(!existing){
            return res.json({message:"User doesnot exist with this id"});
        }
        const bookings=await Bookings.find({User:_id});
        res.json({bookings});
    }catch(err){
        return res.status(500).json({message:"server error"});
    }
}