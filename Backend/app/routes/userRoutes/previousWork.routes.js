module.exports = app => {
	var router = require("express").Router();
	const previousWork = require('../../controllers/userController/previousWork.controller')
	const { getUser } = require("../../middleware");
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
