module.exports = app => {
	var router = require("express").Router();
	const education = require('../../controllers/userController/education.controllers')
	const { getUser } = require("../../middleware");
	// ======================= User ==================================
	//get all education 
	router.get("/:id", getUser, education.getAll)
	//get single education
<<<<<<< HEAD
	router.get("/:id/:id1", getUser, education.getSingle)
=======
	
	//=========== To be Implemented ==================
	
>>>>>>> f543332a2e384312ffb3b87d08062d37075e9c85
	//create education 
	router.post("/:id", getUser, education.create)
	//update education
	router.patch("/:id/:id1", getUser, education.update)

	app.use('/api/users/education', router);

}