const db = require("../../models");
const user = db.users;
const multer = require('multer')



// Retrieve all Users from the database.
exports.getAll = async(req,res) => {
    try{
        const users = await user.find()
        res.json(users)
    }catch(err){
        res.status(500).json({message: err.message})
    }
};

// Retrieve single user from the database.
exports.getSingle = (req, res) => {
    res.json(res.user)
  };

// Create single user
exports.create =async(req, res) => {
    const newUser = new user({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      gender: req.body.gender,
      profilePhoto: req.body.profilePhoto,
      country: req.body.country,
      state: req.body.state,
      title: req.body.title,
      titleOverview: req.body.titleOverview,
      previousWork: req.body.previousWork,
      skill: req.body.skill,
      language: req.body.language,
      education: req.body.education,
      certification: req.body.certification,
      employmentHistory: req.body.employmentHistory,
      otherExperience: req.body.otherExperience
  
    })
    try{
      const newInstance = await newUser.save()
      res.status(201).json(newUser)  
    }catch(err){
      res.status(400).json({message: err.message})
    }
  };

//Delete A single user
exports.delete = async (req, res) => {
    try{
      await res.user.remove()
      res.json({message: `Deleted ${res.user.userName}` })
    }catch(err){
      res.status(400).json({message: err.message})
    }
  };

 // Update single user from the database.
exports.update = async (req, res) => {
    if(req.body.userName != null) {
      //update title field from the returned json 
      res.user.title = req.body.title
    }
    try{
        const updatedUser = await res.user.save()
      res.json(updatedUser)
    }catch(err){
      res.status(400).json({message: err.message})
    }
};   


//image uploading
//storage 
const Storage = multer.diskStorage({
  destination:'uploads/images',
  filename:(req,file,cb) => {
     cb(null, Date.now() + file.originalname )
  }
})

const upload = multer({
  storage: Storage 
}).single('profilePhoto')


exports.upload = (req,res) => {
  let userId = req.params.id
   upload(req,res,(err) => {
    if(err){
      console.log(err)
    }
    else{
      console.log(req.file.filename)
      let imagePath = req.file.filename
      let profilePhoto = imagePath
      const newImage = user.updateOne(
        { _id: userId },
        {
          $set: { profilePhoto: profilePhoto }
        }
        ).then(() => {
          res.send({success:true})
        }).catch((err) => console.log(err))
    }
   })
};



