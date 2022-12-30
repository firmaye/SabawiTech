module.exports = app => {
	var router = require("express").Router();
	const certification = require('../../controllers/userController/certification.controllers')
	const { getUser } = require("../../middleware");
	// ======================= User ==================================
	//get all certification 
	router.get("/:id", getUser, certification.getAll)
	//get single certification
<<<<<<< HEAD
	router.get("/:id/:id1", getUser, certification.getSingle)
=======

	//=========== To be Implemented ==================
	
>>>>>>> f543332a2e384312ffb3b87d08062d37075e9c85
	//create certification 
	router.post("/:id", getUser, certification.create)
	//update certification
	router.patch("/:id/:id1", getUser, certification.update)

	app.use('/api/users/certification', router);

}