const mongoose = require('mongoose');
const ReportSchema = new mongoose.Schema({
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
    ;

const Report= mongoose.model('Report', ReportSchema);

module.exports = {
    ReportSchema,
    Report,
}