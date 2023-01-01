const db = require("../../models");
const User = db.users;




// update user personal info like country,state,firstName,lastName
exports.update = async (req,res) => {

    let userId = req.params.id
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let country = req.body.country
    let state = req.body.state
    
  
    try{
      const updatedInfo = await user.updateOne({_id: userId},{$set:{country: country,state:state,firstName:firstName,lastName:lastName}})
      res.status(201).json(updatedInfo)
    }catch(err){
      res.status(400).json({message: err.message})
    }
  }