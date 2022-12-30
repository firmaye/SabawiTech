module.exports = app => {
	var router = require("express").Router();
	const education = require('../../controllers/userController/education.controllers')
	const { getUser } = require("../../middleware");
	// ======================= User ==================================
	//get all education 
	router.get("/:id", getUser, education.getAll)
	//get single education
	router.get("/:id/:id1", getUser, education.getSingle)
	//create education 
	router.post("/:id", getUser, education.create)
	//update education
	router.patch("/:id/:id1", getUser, education.update)

	app.use('/api/users/education', router);

}