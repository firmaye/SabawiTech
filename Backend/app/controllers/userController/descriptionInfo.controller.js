const db = require("../../models");
const User = db.users;




// update user description Info like title and title overview
exports.update = async (req,res) => {

    let userId = req.params.id
    let titleOverview = req.body.titleOverview
    let title = req.body.title
    
  
    try{
      const updatedInfo = await user.updateOne({_id: userId},{$set:{title: title,titleOverview:titleOverview}})
      res.status(201).json(updatedInfo)
    }catch(err){
      res.status(400).json({message: err.message})
    }
  }