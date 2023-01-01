
module.exports = app => {
  var router = require("express").Router();
  const user = require('../../controllers/userController/user.controller')
  const { getUser } = require("../../middleware");
  // const multer=require('multer');
  // const storage =multer.diskStorage({

  //   //destination for the files
  //   destination: function (req, file,callback){
  //     callback(null,'./app/public/uploads/images');
  //   },

  //   //add back the extension
  //   filename:function (req,file,callback){
  //     callback(null,Date.now()+file.originalname)
  //   },
  // });


  //upload parameter for multer
  // const upload=multer({
  //   storage:storage,
  //   limits:{
  //     fieldSize:1024*1024*3,
  //   },
  // });
  //get all users 
  router.get('/', user.getAll)

  //get single user 
  router.get('/:id', user.getSingle)

  //create a single user 
  router.post('/', user.create)

  //delete user 
  router.delete('/:id', getUser, user.delete)

  //update user 
  router.patch('/:id', getUser, user.update)

  app.use('/api/users', router);

}
