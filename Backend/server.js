const express = require('express')
const mongoose = require('mongoose')
const app = express()

//remove deprecation error 
mongoose.set('strictQuery', true)

//connnect to database 
mongoose.connect("mongodb+srv://philica:sabifithawok@cluster0.1c5jn.mongodb.net/Sabawi?retryWrites=true&w=majority",{useNewUrlParser: true},{useUnifiedTopology: true})


//create to databse instance 
const db = mongoose.connection
db.on('error', (error) => console.error)
db.once('open', () => console.log("connected to database"))

//enale sever accept json 
app.use(express.json())

//set routes 
const userRouter = require('./app/routes/users.routes')

//apply routes
app.use("/users", userRouter)

app.listen(3000, () => {
    console.log("server started")
})