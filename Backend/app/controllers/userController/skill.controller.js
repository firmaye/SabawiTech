const db = require("../../models");
const user = db.users;

// Retrieve all skill from the database.
exports.getAll = async (req, res) => {
  let userId = req.params.id
  try {
    const prevSkill = await user.findById(userId, { skill: 1 })
    res.json(prevSkill)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
};


// Retrieve all Users from the database.
exports.create = async (req, res) => {
  let userId = req.params.id
  let skills = req.body.skill

  try {
    const addedSkill = await user.updateOne({ _id: userId }, { skill: skills })
    res.status(201).json(addedSkill)
  }
  catch (err) {
    res.status(400).json({ message: err.message })
  }
};