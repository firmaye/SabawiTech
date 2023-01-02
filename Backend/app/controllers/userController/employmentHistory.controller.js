const db = require("../../models");
const user = db.users;

//get all employmentHistorys of the selected user 
exports.getAll = async (req, res) => {
  let userId = req.params.id
  try {
    const employmentHistory = await user.findById(userId, { employmentHistory: 1 })
    res.json(employmentHistory)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}


//get single employmentHistory 
// ==== to be implemented ===


//Add new employmentHistory 
exports.create = async (req, res) => {
  let userId = req.params.id

  let newEmploymentHistory = {
    empAt: req.body.empAt,
    empCountry: req.body.empCountry,
    empState: req.body.empState,
    empRole: req.body.empRole,
    empPeriod: req.body.empPeriod,
    empDescription: req.body.empDescription,
    empFrom: req.body.empFrom,
    empTo: req.body.empTo,
    isDeleted: req.body.isDeleted,
    deletedAt: req.body.deletedAt,
  }


  try {
    const employment = await user.updateOne({ _id: userId }, { $push: { employmentHistory: newEmploymentHistory } })
    res.status(201).json(employment)

  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

//Update employmentHistory 
exports.update = async (req, res) => {

  let userId = req.params.id
  let employmentId = req.params.id1
  let updatedEmploymnetHistory = {
    empAt: req.body.empAt,
    empCountry: req.body.empCountry,
    empState: req.body.empState,
    empRole: req.body.empRole,
    empPeriod: req.body.empPeriod,
    empDescription: req.body.empDescription,
    empFrom: req.body.empFrom,
    empTo: req.body.empTo,
    isDeleted: req.body.isDeleted,
    deletedAt: req.body.deletedAt,

  }

  try {
    const employment = await user.updateOne({ _id: userId, "employmentHistory._id": employmentId }, { $set: { "employmentHistory.$": updatedEmploymnetHistory } })
    res.status(201).json(employment)

  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

//delete certificate record 
exports.delete = async (req, res) => {

  let userId = req.params.id
  let employmentId = req.params.id1
  try {
    const employment = await user.updateOne({ _id: userId }, { $pull: { "employmentHistory": { _id: employmentId } } })
    res.status(201).json(employment)

  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}