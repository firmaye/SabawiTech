const express = require('express')
const router = express.Router()
const user = require('../models/user.model')

//set list of routes 

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

//create user 

//delete user 

//update user 

//update user previous work

//update user skill

//update user language

//update user education

//update user certification

//update user employment history

//update other exprience 

module.exports = router