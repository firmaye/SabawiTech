
module.exports = app => {
  var router = require("express").Router();
  const skill = require('../../controllers/userController/skill.controller')
  const { getUser } = require("../../middleware");
  // ======================= User ==================================

  //get all skills 
  router.get("/skill/:id", getUser, skill.getAll )
  //create skill
  router.patch("/skill/:id", getUser ,skill.create)

  app.use('/api/users/skill', router);

}



