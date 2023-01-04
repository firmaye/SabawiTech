module.exports = app => {
  const { authJwt } = require("../middleware/index");
  const internship = require("../controllers/internship.controller");
  var router = require("express").Router();
  app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

  // Create a new Internship
  router.post("/", internship.create);
  // Retrieve all Internship
  router.get("/",[authJwt.verifyToken], internship.findAll);
  // Retrieve a single internship with id
  router.get("/:id", internship.findOne);
  // Update a internship with id
  router.put("/:id", internship.update);
  // Delete a internship with id
  router.delete("/:id", internship.delete);
  // Delete all internship
  router.delete("/", internship.deleteAll);
  
  app.use('/api/internships', router);
};
