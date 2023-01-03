const db = require("../models");
const issue = db.issues;

// Create and Save a new issue
exports.create = async(req, res) => {

    const newIssue = new issue({
			name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
    });
    try{
        const newInstance = await newIssue.save()
        res.status(201).json(newIssue)  
      }catch(err){
        res.status(400).json({message: err.message})
      }


};

// Retrieve all issue from the database.
exports.findAll = async(req, res) => {
    try{
        const newissue = await issue.find()
        res.json(newissue)
    }catch(err){
        res.status(500).json({message: err.message})
    }
};

// Find a single issue with an id
exports.findOne = async(req, res) => {
  const issueId = req.params.id;
    try {
        const issue = await issue.findOne({"issue._id": issueId})
        res.json(issue)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
  
};

// Update a issue by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  issue.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update issue with id=${id}. Maybe issue was not found!`
        });
      } else res.send({ message: "issue was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating issue with id=" + id
      });
    });
};

// Delete a issue with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  issue.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete issue with id=${id}. Maybe issue was not found!`
        });
      } else {
        res.send({
          message: "issue was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete issue with id=" + id
      });
    });
};

// Delete all issue from the database.
exports.deleteAll = (req, res) => {
    issue.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} issue were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all issue."
      });
    });
};
