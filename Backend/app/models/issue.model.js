module.exports = mongoose => {
    const Issue = mongoose.model(
        "issue",
        mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            subject:{
                type: String,
                required: true
            },
            message: {
                type: String,
            },
            isDeleted: {
                type: Number,
                default: 0
            },
            deletedAt: {
                type: Date,
            }
        }, { 
            timestamps: true })
    );

    return Issue;
};