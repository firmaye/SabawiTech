
module.exports = app => {
    var router = require("express").Router();
    const emailPhone = require('../../controllers/userController/emailPhone.controller')
    const { getUser } = require("../../middleware");
    // ======================= descriptionInfo ==================================
  
    //update country,city,first and last name of user 
    router.patch("/:id", getUser, emailPhone.update)
  
    app.use('/api/users/emailPhone', router);
  
  }
  