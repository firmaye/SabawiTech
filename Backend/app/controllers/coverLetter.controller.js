const db = require("../models");
const CoverLetter = db.coverLetters;

// Create and Save a new CoverLetter
exports.create = (req, res) => {
  // Validate request
  if (!req.body.sender) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a CoverLetter
  const coverLetter = new CoverLetter({
    sender: req.body.sender,
    receiverCompany: req.body.receiverCompany,
    letterDescription: req.body.letterDescription,
    intPostId: req.body.intPostId,
    status: req.body.status,
    isDeleted: 0,
    deletedAt: req.body.deletedAt
  });
  // Save CoverLetter in the database
  coverLetter.save(coverLetter)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the coverLetter."
      });
    });
};

// Retrieve all coverLetter from the database.
exports.findAll = (req, res) => {
  const intPostId = req.body.intPostId;
  CoverLetter.find(intPostId)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving coverLetter."
      });
    });
};

// Find a single coverLetter with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  CoverLetter.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found coverLetter with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving coverLetter with id=" + id });
    });
};

// Update a coverLetter by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  CoverLetter.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update coverLetter with id=${id}. Maybe coverLetter was not found!`
        });
      } else res.send({ message: "coverLetter was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating coverLetter with id=" + id
      });
    });
};

// Delete a Cover Letter with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  CoverLetter.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete CoverLetter with id=${id}. Maybe CoverLetter was not found!`
        });
      } else {
        res.send({
          message: "CoverLetter was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete CoverLetter with id=" + id
      });
    });
};

// Delete all CoverLetter from the database.
exports.deleteAll = (req, res) => {
  CoverLetter.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} CoverLetter were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all CoverLetter."
      });
    });
};
