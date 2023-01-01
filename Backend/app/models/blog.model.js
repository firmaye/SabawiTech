module.exports = mongoose => {
    const Blog = mongoose.model(
        "blog",
        mongoose.Schema({
            blogTitle: {
                type: String,
                required: true
            },
            blogImage: {
                data:Buffer,
                type: String,
            },
            blogDescription: {
                type: String,
                required: true
            },
            author: {
                type: String,
            },
            blogTag: {
               type: String,     
            }
           ,
            blogCategory: 
                {
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

    return Blog;
};