module.exports = mongoose => {
    const Token = mongoose.model(
        "token",
        mongoose.Schema({
              userId: {
				type: mongoose.ObjectId,
				ref: "user",
				required: true,
			},
			token: {
				type: String,
				required: true
				},}));

    return Token;
};
