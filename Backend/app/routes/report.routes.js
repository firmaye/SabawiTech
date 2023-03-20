module.exports = app => {
    const report = require("../controllers/report.controller");
    var router = require("express").Router();
    // Create a new issue
    router.post("/", report.post);    
    app.use('/api/report', router);
  };
  