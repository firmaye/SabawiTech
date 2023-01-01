
module.exports = app => {
    var router = require("express").Router();
    const personalInfo = require('../../controllers/userController/personalInfo.controller')
    const { getUser } = require("../../middleware");
    // ======================= User ==================================
  
    //update country,city,first and last name of user 
    router.patch("/personalInfo/:id", getUser ,personalInfo.update)
  
    app.use('/api/users/personalInfo', router);
  
  }