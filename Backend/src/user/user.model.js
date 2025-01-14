const mongoose = require('mongoose');    
    
const UserSchema =new mongoose.Schema({
    firstName:     {type: String, required: true},
    lastName:      {type: String, required: true},
    userName:      {type: String, required: true},
    password:      {type: String, required: true},
    email:         {type: String, },
    phoneNo:       {type: String, },
    gender:        {type: String, required: false},
    profilePhoto:  {data:Buffer,type: String},
    country:      {type: String, required: true},
    state:      {type: String, required: true},
    title:         {type: String, },
    titleOverview: {type: String,},
    previousWork: [
        {
            id: mongoose.ObjectId,
            workTitle: String,
            workThumbnail: String,
            workDescription: String,
            workLink: String,
            workSkill: [String]
         }
    ],
    skill: [
        {
            id: mongoose.ObjectId,
            skillName: String
        }
    ],
    language: [
        {
            id: mongoose.ObjectId,
            languageName: String,
            languageProficiency: String
        }
    ],
    education: [
        {
            id: mongoose.ObjectId,
            schoolName: String,
            dateAttendedFrom: Date,
            dateAttendedTo: Date,
            areaOfStudy: String,
            eduDescription: String
        }
    ],
    certification: [
        {
            id: mongoose.ObjectId,
            certPhoto: String,
            certTitle: String,
            certProvider: String,
            certLink: String,
            dateIssued: Date
        }
    ],
    employmentHistory:[
        {
            id: mongoose.ObjectId,
            empAt: String,
            empCountry: String,
            empState: String,
            empRole: String,
            empFrom: String,
            empTo: String,
            empDescription: String
        }
    ],
    otherExperience: [
        {
            id: mongoose.ObjectId,
            expSubject: String,
            expDescription: String
        }
    ]
    },{timestamps: true })
    
 


const User = mongoose.model('User', UserSchema);

module.exports = {
    UserSchema,
    User,
}