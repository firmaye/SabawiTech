const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
            blogTitle: {
                type: String,
                required: true
            },
            blogImage: {
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
    ;

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = {
    BlogSchema,
    Blog,
}