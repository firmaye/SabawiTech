module.exports = mongoose => {
     const User = mongoose.model(
        "user",
        mongoose.Schema({
    firstName:     {type: String, required: true},
    lastName:      {type: String, },
    userName:      {type: String, },
    password:      {type: String, },
    email:         {type: String, },
    phoneNo:       {type: String, },
    gender:        {type: String, required: false},
    profilePhoto:  {type: String},
    country:      {type: String, required: true},
    state:      {type: String, required: true},
    verified:   {type: Boolean, required: false},
    source:     {type: String, required: false},
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
    
    );

    return User;
}
