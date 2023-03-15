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
			intPostLink:{
				type:String,
				required:true
			},
			intPostName:{
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
			deletedAt:{
				type:Date,
			}	
		},{ timestamps: true }
	   )
  );

  return CoverLetter;
};