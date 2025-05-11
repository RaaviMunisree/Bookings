const Activity=require('../models/Activity');
exports.addActivity=async (req,res)=>{
   const {id,title,description,location,date,time}=req.body;
    try
    { 
      const existing=await Activity.find({id});
      if(existing.length>0)
      return res.json({message:"Activity already exist with this id"});
      const newActivity=await Activity.create({"id":id,"title":title,"description":description,"location":location,"date":date,"time":time});
      await newActivity.save();
      return res.json({newActivity});
    }
    catch(err){
       res.json({message:"Server error"});
    }
 
}
exports.getActivities=async (req,res)=>{
    try
    { 
     const activities=await Activity.find({});
     res.json({activities});
    }catch(err){
        res.json({message:"Server error"});
    }

}