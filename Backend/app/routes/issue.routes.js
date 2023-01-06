module.exports = app => {
    const issue = require("../controllers/issue.controller");
    var router = require("express").Router();
    // Create a new issue
    router.post("/", issue.post);    
    app.use('/api/issues', router);
  };
  