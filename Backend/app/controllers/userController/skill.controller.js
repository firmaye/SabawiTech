const db = require("../../models");
const User = db.users;

// Retrieve all Users from the database.
exports.getAll = async (req,res) => {
  let userId = req.params.id
  try{
    const prevSkill = await user.findById(userId,{skill:1})
    res.json(prevSkill)
  }catch(err){
    res.status(400).json({message: err.message})
  }
};

// Retri

