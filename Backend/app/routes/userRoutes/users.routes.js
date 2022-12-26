
module.exports = app => {
  var router = require("express").Router();
  const user = require('../../controllers/userController/user.controller')
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
const db = require("../../models");
const user = db.users;

async function getUser(req, res, next){
    let returnedUser
    try{
      returnedUser = await user.findById(req.params.id)
      if(user == null){
        return res.status(404).json({message:"can not found user"})
      }
    }catch(err){
      return res.status(500).json({message:err.message})
    }
  
    res.user = returnedUser
    next()
  }
