const db = require("../models");
const CoverLetter = db.coverLetters;
const User=db.users

// Create and Save a new CoverLetter
exports.create = async (req, res) => {

  // Validate request
  if (!req.body.sender) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const id = req.body.sender;
  const user=await User.findById(id)
  const fullName=user.firstName + " " +user.lastName

  // Create a CoverLetter
  const coverLetter = new CoverLetter({
    sender: fullName,
    receiverCompany: req.body.receiverCompany,
    letterDescription: req.body.letterDescription,
    intPostId: req.body.intPostId,
    intPostName: req.body.intPostName,
    intPostLink: req.body.intPostLink,
    status: req.body.status,
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

