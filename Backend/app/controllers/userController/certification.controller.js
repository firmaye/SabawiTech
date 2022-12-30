const db = require("../../models");
const user = db.users;

//get all certifications of the selected user 
exports.getAll = async (req,res) => {
    let userId = req.params.id
    try{
      const certification = await user.findById(userId,{certification:1})
      res.json(certification)
    }catch(err){
      res.status(400).json({message: err.message})
    }
  }


//get single certification 
// ==== to be implemented ===


//Add new certification 
exports.create = async (req, res) => {
    let userId = req.params.id
    
    let newCertificate = {
      certPhoto: req.body.certPhoto,
      certTitle: req.body.certTitle,
      certProvider: req.body.certProvider,
      certLink: req.body.certLink,
      dateIssued:req.body.dateIssued,
      isDeleted: req.body.isDeleted,
      deletedAt: req.body.deletedAt,
  }
  
    
    try {
      const certificate = await user.updateOne({ _id: userId }, { $push: { certification: newCertificate } })
      res.status(201).json(newCertificate)
  
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }

//Update certification 
exports.update =  async (req,res) => {

    let userId = req.params.id
    let certificateId= req.params.id1
    let updatedCertificate = {
      certPhoto: req.body.certPhoto,
      certTitle: req.body.certTitle,
      certProvider: req.body.certProvider,
      certLink: req.body.certLink,
      dateIssued:req.body.dateIssued,
      isDeleted: req.body.isDeleted,
      deletedAt: req.body.deletedAt,
  }
  
    try{
      const certificate = await user.updateOne({_id: userId,"certification._id":certificateId},{$set:{"certification.$": updatedCertificate}})
      res.status(201).json(certificate)
  
    }catch(err){
      res.status(400).json({message: err.message})
    }
  }

//delete certificate record 
exports.delete = async (req,res) => {

  let userId = req.params.id
  let certificateId= req.params.id1
  try{
    const certificate = await user.updateOne({_id: userId},{$pull: {"certification": {_id: certificateId}}})
    res.status(201).json(certificate)

  }catch(err){
    res.status(400).json({message: err.message})
  }
}