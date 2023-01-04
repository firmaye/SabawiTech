const express = require('express')
const app = express()
const db = require("./app/models");
const cors=require("cors")
var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


//enale sever accept json 
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


require("./app/routes/userRoutes/users.routes")(app);
require("./app/routes/userRoutes/personalInfo.routes")(app);
require("./app/routes/userRoutes/descriptionInfo.routes")(app);
require("./app/routes/userRoutes/previousWork.routes")(app);
require("./app/routes/userRoutes/skill.routes")(app);
require("./app/routes/userRoutes/language.routes")(app);
require("./app/routes/userRoutes/education.routes")(app);
require("./app/routes/userRoutes/certification.routes")(app);
require("./app/routes/userRoutes/employmentHistory.routes")(app);
require("./app/routes/userRoutes/otherExperience.routes")(app);
require("./app/routes/blog.routes")(app);
require("./app/routes/internship.routes")(app);
require("./app/routes/coverLetter.routes")(app);
require("./app/routes/issue.routes")(app);

require('./app/routes/auth.routes')(app);
app.use("/uploads/image",express.static('uploads/image'))


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});