const express = require('express')
const { isObjectIdOrHexString } = require('mongoose')
const router = express.Router()
const user = require('../models/user.model')

//set list of routes 


// ======================= User ==================================

//get all users 
router.get('/', async(req,res) => {
    try{
        const users = await user.find()
        res.json(users)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

//get single user 
router.get('/:id', getUser, (req, res) => {
    res.send(res.user.userName)
  })
  
//create user 
router.post('/', async(req, res) => {
    const newUser = new user({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      gender: req.body.gender,
      profilePhoto: req.body.profilePhoto,
      location: req.body.location,
      title: req.body.title,
      titleOverview: req.body.titleOverview,
      previousWork: req.body.previousWork,
      skill: req.body.skill,
      language: req.body.language,
      education: req.body.education,
      certification: req.body.certification,
      employmentHistory: req.body.employmentHistory,
      otherExperience: req.body.otherExperience
  
    })
    try{
      const newInstance = await newUser.save()
      res.status(201).json(newUser)  
    }catch(err){
      res.status(400).json({message: err.message})
    }
    
  })

//delete user 
router.delete('/:id', getUser, async (req, res) => {
    try{
      await res.user.remove()
      res.json({message: `Deleted ${res.user.userName}` })
    }catch(err){
      res.status(400).json({message: err.message})
    }
  })


//update user 
router.patch('/:id', getUser, async (req, res) => {
    if(req.body.userName != null) {
      //update title field from the returned json 
      res.user.title = req.body.title
    }
    try{
        const updatedUser = await res.user.save()
      res.json(updatedUser)
    }catch(err){
      res.status(400).json({message: err.message})
    }
})



// ======================= previuos work ==================================



// ======================= skill ==================================


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

module.exports = router