module.exports = app => {
	var router = require("express").Router();
	const certification = require('../../controllers/userController/certification.controller')
	const { getUser } = require("../../middleware");
	// ======================= User ==================================
	//get all certification 
	router.get("/:id", getUser, certification.getAll)
	//get single certification

	//=========== To be Implemented ==================

	//create certification 
	router.post("/:id", getUser, certification.create)
	//update certification
	router.patch("/:id/:id1", getUser, certification.update)

	//update certification
	router.delete("/:id/:id1", getUser, certification.update)

	app.use('/api/users/certification', router);

}