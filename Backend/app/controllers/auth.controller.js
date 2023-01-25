const db = require("../models");
const User = db.users;
const Token = db.tokens;
const Validator=require('../helpers/emailValidator')
const crypto = require("crypto");
const EmailSender = require("../helpers/emailVerification");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const fetch = require('node-fetch');

exports.signup =async (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: bcrypt.hashSync(req.body.password, 8),
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        gender: req.body.gender,
        profilePhoto: req.body.profilePhoto,
        country: req.body.country,
        state: req.body.state,
        title: req.body.title,
        titleOverview: req.body.titleOverview,
        previousWork: req.body.previousWork,
        skill: req.body.skill,
        language: req.body.language,
        education: req.body.education,
        certification: req.body.certification,
        employmentHistory: req.body.employmentHistory,
        otherExperience: req.body.otherExperience,
        source:'local',
        verified:false,
    })
    const existedUser=await User.findOne({ email:req.body.email});    
    if (existedUser){
        res.status(400).send({
            success:false, 
            error: "Failed! email is already in use!" });
        return;
    }


    const {valid} = await Validator.isEmailValid(req.body.email);

    if (!valid){
        res.status(400).send({
            success:false,
            error: "Please provide a valid email address.",
        })
        return;
    }

    user.save(async (err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }


        let token = await new Token({
            userId: user._id,
            token: crypto.randomBytes(32).toString("hex"),
        }).save((err, token) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        console.log(process.env.BASE_URL)
        const message =`${process.env.BASE_URL}/user/verify/${user.id}/${token.token}`;
        console.log(user.email)
        EmailSender ({email:user.email, subject:"Verify Email", message});
        
        });
        

        var tokens = jwt.sign({ id: user.id }, process.env.SECRET, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).send(
            {
            success:true,info:
            {
            id: user._id,
            username: user.username,
            email: user.email,
            accessToken: tokens,
            }

        });
        return;
        
        });

};



exports.signin = (req, res) => {
    User.findOne({
        email: req.body.email
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({
                success:false,
                message: err });
            return;
        }

        if (!user) {
            return res.status(404).send({ 
                success:false,
                message: "User is not Registered" });
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                sucess:false,
                message: "Invalid Password!"
            });
        }

        var tokens = jwt.sign({ id: user.id }, process.env.SECRET, {
            expiresIn: 86400 // 24 hours
        });
         res.status(200).send(
            {
            success:true,info:
            {
            id: user._id,
            username: user.username,
            email: user.email,
            accessToken: tokens,
            }

        });
        return;
    
    });
};



exports.google= async (req, res) => {

    const  accessToken=req.body.access_token
    var Userd=null
    fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
            method: "GET",
            headers: {"Authorization": `Bearer ${accessToken}`
    }})
    .then(res => res.json())
    .then((data) => {
       const user = new User({
            firstName: data.given_name,
            lastName: data.family_name,
            userName: '',
            email: data.email,
            phoneNo: '',
            gender: '',
            profilePhoto: '',
            country: '',
            state: '',
            title: '',
            titleOverview: '',
            previousWork: [],
            skill: [],
            language: [],
            education: [],
            certification: [],
            employmentHistory: [],
            otherExperience: [],
            source:'google',
            verified:true
        })  

        console.log(user)
        
        })
    .catch(err => console.log(err));
   
        res.send({Userd});
        return;

}