module.exports = app => {
	var router = require("express").Router();
	const employmentHistory = require('../../controllers/userController/employmentHistory.controller')
	const { getUser } = require("../../middleware");
	// ======================= User ==================================
	//get all employmentHistory 
	router.get("/:id", getUser, employmentHistory.getAll)
	//get single employmentHistory
	router.get("/:id/:id1", getUser,employmentHistory.getSingle)
	//create employmentHistory 
	router.post("/:id", getUser, employmentHistory.create )	
	//update employmentHistory
	router.patch("/:id/:id1", getUser,employmentHistory.update)
  
  app.use('/api/users/employmentHistory', router);

}