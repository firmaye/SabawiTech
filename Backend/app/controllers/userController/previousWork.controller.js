const db = require("../../models");
const user = db.users;

// Retrieve single user from the database.
exports.getAll = async (req,res) => {
    let userId = req.params.id
    try{
      const prevWork = await user.findById(userId,{previousWork:1})
      res.json(prevWork)
    }catch(err){
      res.status(400).json({message: err.message})
    }
  };
// Retrieve single PrevWork from the database.
exports.getSingle = async (req,res) => {
    let workId = req.params.id1
    try{
      const prevWork = await user.find({"previousWork._id":workId},{previousWork:1})
      res.json(prevWork)
    }catch(err){
      res.status(400).json({message: err.message})
    }
  };

// create single PrevWork 
exports.create = async (req,res) => {
    let userId = req.params.id
    let newPrevWork = {
      workTitle: req.body.workTitle,
      workThumbnail: req.file.filename,
      workDescription: req.body.workDescription,
      workLink: req.body.workLink,
      workSkill: req.body.workSkill,
    }
    try{
      const prevWork = await user.updateOne({_id: userId}, {$push: {previousWork: newPrevWork}})
      res.status(201).json(newPrevWork)
  
    }catch(err){
      res.status(400).json({message: err.message})
    }
  };

// delete single PrevWork from the database.
exports.delete = async (req,res) => {
    let userId = req.params.id
    let workId = req.params.id1
    try{
      const prevWork = await user.updateOne({_id: userId},{$pull: {"previousWork": {_id: workId}}})
      res.status(201).json({message : "work deleted",prevWork})
    }catch(err){
      res.status(400).json({message: err.message})
    }
  };



  //update a single previous work
  exports.update =async (req,res) => {

    let userId = req.params.id
    let workId= req.params.id1
    let updatedPrevWork = {
      workTitle: req.body.workTitle || "",
      workThumbnail: req.body.workThumbnail || "",
      workDescription: req.body.workDescription || "",
      workLink: req.body.workLink || "",
      workSkill: req.body.workSkill || "",
    }
  
    try{
      const prevWork = await user.updateOne({_id: userId,"previousWork._id":workId},{$set:{"previousWork.$": updatedPrevWork}})
      res.status(201).json(prevWork)
  
    }catch(err){
      res.status(400).json({message: err.message})
    }
  };
