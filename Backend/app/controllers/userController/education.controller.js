const db = require("../../models");
const user = db.users;

//get all educations of the selected user 
exports.getAll = async (req, res) => {
  let userId = req.params.id
  try {
    const education = await user.findById(userId, { education: 1 })
    res.json(education)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
};


//get single education 
exports.getSingle = async (req, res) => {
  let userId = req.params.id
  let educationId = req.params.id1
  try {
    const education = await user.find({ "user._id": userId, "education._id": educationId }, { education: 1 })
    res.json(education)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}


//Add new education 
exports.create = async (req, res) => {
  let userId = req.params.id

  let newEducation = {
    schoolName: req.body.schoolName,
    dateAttendedFrom: req.body.dateAttendedFrom,
    dateAttendedTo: req.body.dateAttendedTo,
    areaOfStudy: req.body.areaOfStudy,
    eduDescription: req.body.eduDescription || "",
  }

  try {
    const education = await user.updateOne({ _id: userId }, { $push: { education: newEducation } })
    res.status(201).json(newEducation)

  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

//Update education 
exports.update = async (req, res) => {

  let userId = req.params.id
  let educationId = req.params.id1
  let updatedEducation = {
    schoolName: req.body.schoolName,
    dateAttendedFrom: req.body.dateAttendedFrom,
    dateAttendedTo: req.body.dateAttendedTo,
    areaOfStudy: req.body.areaOfStudy,
    eduDescription: req.body.eduDescription || "",
  }
  try {
    const education = await user.updateOne({ _id: userId, "education._id": educationId }, { $set: { "education.$": updatedEducation } })
    res.status(201).json(education)

  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.delete = async (req, res) => {

  let userId = req.params.id
  let educationId = req.params.id1
  try {
    const education = await user.updateOne({ _id: userId }, { $pull: { "education": { _id: educationId } } })
    res.status(201).json(education)

  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}