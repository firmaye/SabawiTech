module.exports = app => {
	var router = require("express").Router();
	const education = require('../../controllers/userController/education.controller')
	const { getUser } = require("../../middleware");
	// ======================= User ==================================
	//get all education 
	router.get("/:id", getUser, education.getAll)
	//get single education
	
	//=========== To be Implemented ==================
	
	//create education 
	router.post("/:id", getUser, education.create )	
	//update education
	router.patch("/:id/:id1", getUser,education.update)
  
  app.use('/api/users/education', router);

}