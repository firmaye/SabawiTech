module.exports = app => {
    const issue = require("../controllers/issue.controller");
    var router = require("express").Router();
    // Create a new issue
    router.post("/", issue.create);
    // Retrieve all issue
    router.get("/", issue.findAll);
    // Retrieve a single issue with id
    router.get("/:id", issue.findOne);
    // Update a issue with id
    router.put("/:id", issue.update);
    // Delete a issue with id
    router.delete("/:id", issue.delete);
    // Delete all issue
    router.delete("/", issue.deleteAll);
    
    app.use('/api/issues', router);
  };
  