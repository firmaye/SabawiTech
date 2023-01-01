module.exports = app => {
	var router = require("express").Router();
	const language = require('../../controllers/userController/language.controller')
	const { getUser } = require("../../middleware");
	// ======================= User ==================================
	//get all language 
	router.get("/:id", getUser, language.getAll)
	//get single language
	
	//=========== To be Implemented ==================
	
	//no creation always updation occurs
	//update language
	router.patch("/:id/:id1", getUser,language.update)
  
  app.use('/api/users/language', router);

}