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

//get all previousWork 
router.get("/previousWork/:id", getUser, async (req,res) => {
    let userId = req.params.id
    try{
      const prevWork = await user.findById(userId,{previousWork:1})
      res.json(prevWork)
    }catch(err){
      res.status(400).json({message: err.message})
    }
  })

//get single previousWork
router.get("/previousWork/:id/:id1", getUser, async (req,res) => {
    let workId = req.params.id1
    try{
      const prevWork = await user.find({"previousWork._id":workId},{previousWork:1})
      res.json(prevWork)
    }catch(err){
      res.status(400).json({message: err.message})
    }
  })

//create previousWork 
router.post("/previousWork/:id", getUser, async (req,res) => {
    let userId = req.params.id
    let newPrevWork = {
      workTitle: req.body.workTitle,
      workThumbnail: req.body.workThumbnail,
      workDescription: req.body.workDescription,
      workLink: req.body.workLink,
      workSkill: req.body.workSkill,
    }
    try{
      const prevWork = await user.updateOne({_id: userId}, {$push: {previousWork: newPrevWork}})
      res.status(201).json(newPrevWork)
  
    }catch(err){
      res.status(400).json({message: err.message})
    }
  })

//delete previousWork
router.delete("/previousWork/:id/:id1", getUser, async (req,res) => {
    let userId = req.params.id
    let workId = req.params.id1
    try{
      const prevWork = await user.updateOne({_id: userId},{$pull: {"previousWork": {_id: workId}}})
      res.status(201).json({message : "work deleted",prevWork})
    }catch(err){
      res.status(400).json({message: err.message})
    }
  })

//update previousWork
router.patch("/previousWork/:id/:id1", getUser, async (req,res) => {

    let userId = req.params.id
    let workId= req.params.id1
    let updatedPrevWork = {
      workTitle: req.body.workTitle || "",
      workThumbnail: req.body.workThumbnail || "",
      workDescription: req.body.workDescription || "",
      workLink: req.body.workLink || "",
      workSkill: req.body.workSkill || "",
    }
  
    try{
      const prevWork = await user.updateOne({_id: userId,"previousWork._id":workId},{$set:{"previousWork.$": updatedPrevWork}})
      res.status(201).json(prevWork)
  
    }catch(err){
      res.status(400).json({message: err.message})
    }
  })

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