
module.exports = app => {
  var router = require("express").Router();
  const skill = require('../../controllers/userController/skill.controller')
  // ======================= User ==================================

 

  app.use('/api/users', router);

}




// const express = require('express')
// const { isObjectIdOrHexString } = require('mongoose')
// const router = express.Router()


//set list of routes 



// ======================= previuos work ==================================



// ======================= skill ==================================

// //get all skills 
// router.get("/skill/:id", getUser, )

// // creation and deletion for skills are handeled from the frontend side 
// //create skill
// router.patch("/skill/:id", getUser , async (req,res) => {
//   let userId = req.params.id
//   let skills = req.body.skill
  
//   try{
//     const addedSkill = await user.updateOne({_id:userId},{skill: skills})  
//     res.status(201).json(addedSkill)
//   }
//     catch(err){
//     res.status(400).json({message: err.message})
//   }
// })

// ======================= language ==================================


// ======================= education ==================================


// ======================= education ==================================


// ======================= employment history ==================================


// ======================= other exprience  ==================================


//create a middleware to check if the user exists

async function getUser(req, res, next){
    let returnedUser
    try{
      returnedUser = await user.findById(req.params.id)
      if(user == null){
        return res.status(404).json({message:"can not found user"})
      }
    }catch(err){
      return res.status(500).json({message:err.message})
    }
  
    res.user = returnedUser
    next()
  }
