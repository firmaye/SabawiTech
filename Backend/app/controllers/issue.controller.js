const db = require("../models");
const  EmailSender=require("../helpers/sendEmail.js");
// Create and Save a new issue
exports.post = async(req, res) => {
    const name=req.body.name
    const email= req.body.email
    const subject= req.body.subject
    const message= req.body.message
    try{
        EmailSender({email,name,subject,message})
        res.send({success:true})
    }catch(err){
        res.status(500).send({success:false})
    }
    
};
