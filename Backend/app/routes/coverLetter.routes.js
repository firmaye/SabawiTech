module.exports = app => {
  const coverLetter = require("../controllers/coverLetter.controller");
  var router = require("express").Router();
  // Create a new coverLetter
  router.post("/", coverLetter.create);
  // Retrieve all coverLetter
  router.get("/:id", coverLetter.findOne);
  app.use('/api/coverLetters', router);
};
