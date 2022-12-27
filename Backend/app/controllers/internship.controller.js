const db = require("../models");
const Internship = db.internships;

// Create and Save a new Internship
exports.create = (req, res) => {
  // Validate request
  if (!req.body.intTitle) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Internship
  const internship = new Internship({
			intTitle:req.body.intTitle,
			companyName:req.body.companyName,
			intDescription:req.body.intDescription,
			intLocation:req.body.intLocation,
			intType:req.body.intType,
			intBenefit:req.body.intBenefit,
			intDuration:req.body.intDuration,
			requiredSkill:req.body.requiredSkill,
			intStatus:req.body.intStatus,
			attachment:req.body.attachment,
			isDeleted:0,
			deletedAt:req.body.deletedAt
    });

  // Save Internship in the database
  internship.save(internship)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Internship."
      });
    });
};

// Retrieve all Internship from the database.
exports.findAll = (req, res) => {
  const intTitle = req.body.intTitle;
  Internship.find(intTitle)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving internships."
      });
    });
};

// Find a single Internship with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Internship.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Internship with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Internship with id=" + id });
    });
};

// Update a Internship by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Internship.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Internship with id=${id}. Maybe Internship was not found!`
        });
      } else res.send({ message: "Internship was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Internship with id=" + id
      });
    });
};

// Delete a Internship with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Internship.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Internship with id=${id}. Maybe Internship was not found!`
        });
      } else {
        res.send({
          message: "Internship was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Internship with id=" + id
      });
    });
};

// Delete all Internship from the database.
exports.deleteAll = (req, res) => {
    Internship.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Internship were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Internship."
      });
    });
};
