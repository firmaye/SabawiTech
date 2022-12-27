module.exports = mongoose => {
  const Internship = mongoose.model(
    "internship",
    mongoose.Schema(
      {
			intTitle:{
				type:String,
				required:true
			},
			companyName:{
				type:String,
			},
			intDescription:{
				type:String,
				required:true
			},
			intLocation:{
				type:String,
			},
			intType:{
				type:String,
			},
			intBenefit:{
				type:String,
			},
			intDuration:{
				type:String,
			},
			requiredSkill:{
				type:String,
			},
			intStatus:{
				type:String,
			},
			attachment:{
				type:String,
			},
			isDeleted:{
				type: Number,
				default:0
			},
			deletedAt:{
				type:Date,
			}	
		},{ timestamps: true }
	   )
  );

  return Internship;
};