module.exports = app => {
  const coverLetter = require("../controllers/coverLetter.controller");
  var router = require("express").Router();
  // Create a new coverLetter
  router.post("/", coverLetter.create);
  // Retrieve all coverLetter
  router.get("/", coverLetter.findAll);
  // Retrieve a single coverLetter with id
  router.get("/:id", coverLetter.findOne);
  // Update a coverLetter with id
  router.put("/:id", coverLetter.update);
  // Delete a coverLetter with id
  router.delete("/:id", coverLetter.delete);
  // Delete all coverLetter
  router.delete("/", coverLetter.deleteAll);
  
  app.use('/api/coverLetters', router);
};
