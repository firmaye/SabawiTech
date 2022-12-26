module.exports = app => {
	var router = require("express").Router();
	const previousWork = require('../../controllers/userController/previousWork.controller')
	// ======================= User ==================================
	//get all previousWork 
	router.get("/:id", getUser, previousWork.getAll)
	//get single previousWork
	router.get("/:id/:id1", getUser,previousWork.getSingle)
	//create previousWork 
	router.post("/:id", getUser, previousWork.create )
	//delete previousWork
	router.delete("/:id/:id1", getUser, previousWork.delete)	
	//update previousWork
	router.patch("/:id/:id1", getUser,previousWork.update)
  
  app.use('/api/users/previousWork', router);

}
const db = require("../../models");
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
