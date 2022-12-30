module.exports = app => {
	var router = require("express").Router();
	const otherExperience = require('../../controllers/userController/otherExperience.controller')
	const { getUser } = require("../../middleware");
	// ======================= User ==================================
	//get all otherExperience 
	router.get("/:id", getUser, otherExperience.getAll)
	//get single otherExperience
	router.get("/:id/:id1", getUser,otherExperience.getSingle)
	//create otherExperience 
	router.post("/:id", getUser, otherExperience.create )	
	//update otherExperience
	router.patch("/:id/:id1", getUser,otherExperience.update)
  
  app.use('/api/users/otherExperience', router);

}