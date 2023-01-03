const db = require("../../models");
const user = db.users;
const multer = require('multer')

//storage 
const Storage = multer.diskStorage({
  destination:'uploads/image',
  filename:(req,file,cb) => {
     cb(null, Date.now() + file.originalname )
  }
})

const upload = multer({
  storage: Storage 
}).single('workThumbnail')


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
exports.create = (req,res) => {
  let userId = req.params.id
  let imageName = ""

   upload(req,res,(err) => {
    if(err){
      console.log(err)
    }
    else{
      console.log("filename: "+req.file.filename)
      imageName = req.file.filename
      console.log("imageName: "+imageName)
    }
   })


   setTimeout(() => {
    let userId = req.params.id
    let newPrevWork = {
      workTitle: req.body.workTitle,
      workThumbnail: imageName,
      workDescription: req.body.workDescription,
      workLink: req.body.workLink,
      workSkill:req.body.workSkill
    }
    try{
      const prevWork = user.updateOne(
        {_id: userId}, 
        {$push: {previousWork: newPrevWork}}
        ).then(() => {
          res.send({success:true})
        }).catch((err) => console.log(err))
  
    }catch(err){
      res.status(400).json({message: err.message})
    }
  }, "1000")
  
   
}



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

