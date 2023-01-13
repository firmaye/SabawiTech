const db = require("../../models");
const User = db.users;




// update user description Info like title and title overview
exports.update = async (req, res) => {

  let userId = req.params.id
  let email = req.body.email
  let phoneNo = req.body.phoneNo


  try {
    const updatedInfo = await User.updateOne({ _id: userId }, { $set: { email: email, phoneNo: phoneNo } })
    res.status(201).json(updatedInfo)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}