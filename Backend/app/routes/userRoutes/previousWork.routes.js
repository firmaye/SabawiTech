module.exports = app => {
	var router = require("express").Router();
	const previousWork = require('../../controllers/userController/previousWork.controller')
	const { getUser } = require("../../middleware");
	const multer=require('multer');
	const storage =multer.diskStorage({

		//destination for the files
		destination: function (req, file,callback){
		callback(null,'./app/public/uploads/images');
		},

		//add back the extension
		filename:function (req,file,callback){
		callback(null,Date.now()+file.originalname)
		},
	});


	//upload parameter for multer
	const upload=multer({
		storage:storage,
		limits:{
		fieldSize:1024*1024*3,
		},
	});
	//get all previousWork 
	router.get("/:id", getUser, previousWork.getAll)
	//get single previousWork
	
	//=========== To be Implemented ==================
	
	//create previousWork 
	router.post("/:id", getUser,upload.single('workThumbnail'), previousWork.create )
	//delete previousWork
	router.delete("/:id/:id1", getUser, previousWork.delete)	
	//update previousWork
	router.patch("/:id/:id1", getUser,previousWork.update)
  
  app.use('/api/users/previousWork', router);

}
