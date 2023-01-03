
module.exports = app => {
  var router = require("express").Router();
  const descriptionInfo = require('../../controllers/userController/descriptionInfo.controller')
  const { getUser } = require("../../middleware");
  // ======================= descriptionInfo ==================================

  //update country,city,first and last name of user 
  router.patch("/:id", getUser, descriptionInfo.update)

  app.use('/api/users/descriptionInfo', router);

}
