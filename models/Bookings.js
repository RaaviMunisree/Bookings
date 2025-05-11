const mongoose=require('mongoose');
const BookingsSchema=new mongoose.Schema({
    User:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    id:{type:String,required:true}
});
module.exports=mongoose.model("Bookings",BookingsSchema);