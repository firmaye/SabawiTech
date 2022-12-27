
module.exports = app => {
  var router = require("express").Router();
  const user = require('../../controllers/userController/user.controller')
  const { getUser } = require("../../middleware");
  // ======================= User ==================================

  //get all users 
  router.get('/', user.getAll)

  //get single user 
  router.get('/:id', getUser,user.getSingle )
    
  //create a single user 
  router.post('/',user.create)

  //delete user 
  router.delete('/:id', getUser,user.delete)


  //update user 
  router.patch('/:id', getUser, user.update)

  app.use('/api/users', router);

}