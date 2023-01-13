const mongoose = require('mongoose');
const CoverLetterSchema =new mongoose.Schema(
      {
			sender:{
				type:String,
				required:true
			},
			receiverCompany:{
				type:String,
			},
			letterDescription:{
				type:String,
				required:true
			},
			intPostId:{
				type:String,
				required:true
			},
			status:{
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

const CoverLetter = mongoose.model('CoverLetter', CoverLetterSchema);

module.exports = {
    CoverLetterSchema,
    CoverLetter,
}