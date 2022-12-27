const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./user.model.js")(mongoose);

db.blogs = require("./blog.model.js")(mongoose);
db.internships=require("./internship.model")(mongoose);
db.coverLetters=require("./coverLetter.model")(mongoose);

module.exports = db;