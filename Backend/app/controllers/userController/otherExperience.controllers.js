const db = require("../../models");
const user = db.users;

//get all otherExperiences of the selected user 
exports.getAll = async (req,res) => {
    let userId = req.params.id
    try{
      const experience = await user.findById(userId,{otherExperience:1})
      res.json(experience)
    }catch(err){
      res.status(400).json({message: err.message})
    }
  }

//get single otherExperience 
// ==== to be implemented ===


//Add new otherExperience 
exports.create =async (req, res) => {
    let userId = req.params.id
    
    let newExperience = {
      expSubject: req.body.expSubject,
      expDescription: req.body.expDescription,
      isDeleted: req.body.isDeleted,
      deletedAt: req.body.deletedAt,
      createdAt: req.body.createdAt,
      updatedAt: req.body.createdAt,
  }
    try {
      const experience = await user.updateOne({ _id: userId }, { $push: { otherExperience: newExperience } })
      res.status(201).json(experience)
  
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }

//Update otherExperience 
exports.update =  async (req,res) => {

    let userId = req.params.id
    let experienceId= req.params.id1
    let updatedExperience ={
      expSubject: req.body.expSubject,
      expDescription: req.body.expDescription,
      isDeleted: req.body.isDeleted,
      deletedAt: req.body.deletedAt    
    }
  
    try{
      const experience = await user.updateOne({_id: userId,"otherExperience._id":experienceId},{$set:{"otherExperience.$": updatedExperience}})
      res.status(201).json(experience)
    }catch(err){
      res.status(400).json({message: err.message})
    }
  }


//delete certificate record 
exports.delete = async (req,res) => {

  let userId = req.params.id
  let experienceId= req.params.id1
  try{
    const experience = await user.updateOne({_id: userId},{$pull: {"otherExprience": {_id: experienceId}}})
    res.status(201).json(experience)

  }catch(err){
    res.status(400).json({message: err.message})
  }
}