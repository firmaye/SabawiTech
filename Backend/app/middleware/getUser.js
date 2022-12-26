const db = require("../models");
const user = db.users;

async function getUser(req, res, next){
    let returnedUser
    try{
      returnedUser = await user.findById(req.params.id)
      if(user == null){
        return res.status(404).json({message:"can not found user"})
      }
    }catch(err){
      return res.status(500).json({message:err.message})
    }
  
    res.user = returnedUser
    next()
  }
module.exports=getUser