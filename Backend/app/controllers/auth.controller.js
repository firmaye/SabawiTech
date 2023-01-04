const config = require("../config/auth.config");
const db = require("../models");
const User = db.users;


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
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
        otherExperience: req.body.otherExperience

    })

    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: "User was registered successfully!" });
    });

};



exports.signin = (req, res) => {
    console.log(req.body)
    User.findOne({
        email: req.body.email
    }).exec((err, user) => {
        console.log(user)
        console.log(err)
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });
        res.status(200).send({
            id: user._id,
            username: user.username,
            email: user.email,
            accessToken: token
        });
    });
};