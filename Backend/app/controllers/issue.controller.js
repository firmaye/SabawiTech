const db = require("../models");
const EmailSender = require("../helpers/sendEmail.js");
// Create and Save a new issue
exports.post = async (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    console.log("start sending")
    EmailSender({ email, name, subject, message })
};
