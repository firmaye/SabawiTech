module.exports = mongoose => {
  const CoverLetter = mongoose.model(
    "coverLetter",
    mongoose.Schema(
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
			intPost:{
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
  );

  return CoverLetter;
};