const db = require("../models");
const Report = db.reports;

// Create and Save a new Blog
exports.post = (req, res) => {
  // Validate request
  if (!req.body.reportDescription) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Blog
  const report = new Report({
			reportType:req.body.reportType,
			postName:req.body.postName,
			reportDescription:req.body.reportDescription,
			postId:req.body.postId,
    });

  // Save Blog in the database
  report.save(report)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the report."
      });
    });
};
