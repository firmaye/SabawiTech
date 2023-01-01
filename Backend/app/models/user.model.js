module.exports = mongoose => {
     const User = mongoose.model(
        "user",
        mongoose.Schema({
    firstName:     {type: String, required: true},
    lastName:      {type: String, required: true},
    userName:      {type: String, required: true},
    password:      {type: String, required: true},
    email:         {type: String, required: true},
    phoneNo:       {type: String, required: true},
    gender:        {type: String, required: false},
    profilePhoto:  {data:Buffer,type: String},
    country:      {type: String, required: false},
    state:      {type: String, required: false},
    title:         {type: String, required: false},
    titleOverview: {type: String, required: false},
    previousWork: [
        {
            id: mongoose.ObjectId,
            workTitle: String,
            workThumbnail: String,
            workDescription: String,
            workLink: String,
            workSkill: [String] ,
            isDeleted: Number,
            deletedAt: Date,
            createdAt: Date,
            updatedAt: Date,


         }
    ],
    skill: [
        {
            id: mongoose.ObjectId,
            skillName: String,
            isDeleted: Number,
            deletedAt: Date,
            createdAt: Date,
            updatedAt: Date,
        }
    ],
    language: [
        {
            id: mongoose.ObjectId,
            languageName: String,
            languageProficiency: String,
            isDeleted: Number,
            deletedAt: Date,
            createdAt: Date,
            updatedAt: Date,
        }
    ],
    education: [
        {
            id: mongoose.ObjectId,
            schoolName: String,
            dateAttendedFrom: Date,
            dateAttendedTo: Date,
            areaOfStudy: String,
            eduDescription: String,
            isDeleted: Number,
            deletedAt: Date,
            createdAt: Date,
            updatedAt: Date,
        }
    ],
    certification: [
        {
            id: mongoose.ObjectId,
            certPhoto: String,
            certTitle: String,
            certProvider: String,
            certLink: String,
            dateIssued: Date,
            isDeleted: Number,
            deletedAt: Date,
            createdAt: Date,
            updatedAt: Date,
        }
    ],
    employmentHistory:[
        {
            id: mongoose.ObjectId,
            empAt: String,
            empLocation: String,
            empRole: String,
            empFrom: String,
            empTo: String,
            empDescription: String,
            isDeleted: Number,
            deletedAt: Date,
            createdAt: Date,
            updatedAt: Date,
        }
    ],
    otherExperience: [
        {
            id: mongoose.ObjectId,
            expSubject: String,
            expDescription: String,
            isDeleted: Number,
            deletedAt: Date,
            createdAt: Date,
            updatedAt: Date,
        }
    ]
    },{timestamps: true })
    
    );

    return User;
}
