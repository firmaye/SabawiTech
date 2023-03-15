const mongoose = require('mongoose');
const InternshipSchema = new mongoose.Schema(
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
			deletedAt:{
				type:Date,
			}	
		},{ timestamps: true }
	   )
  ;

const Internship = mongoose.model('Internship', InternshipSchema);

module.exports = {
    InternshipSchema,
    Internship,
}