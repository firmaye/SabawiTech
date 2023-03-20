module.exports = mongoose => {
    const Report = mongoose.model(
        "report",
	       mongoose.Schema({
				reportType: {
					type: String,
					required: true
				},
				postName: {
					type: String,
				},
				reportDescription: {
					type: String,
					required: true
				},
				postId: {
					type: String,
				}
        }, { 
            timestamps: true })
    );

    return Report;
};
