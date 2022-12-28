
module.exports = app => {
  const blog = require("../controllers/blog.controller.js");
  var router = require("express").Router();
  const multer=require('multer');
  const storage =multer.diskStorage({

    //destination for the files
    destination: function (req, file,callback){
      callback(null,'./app/public/uploads/images');
    },

    //add back the extension
    filename:function (req,file,callback){
      callback(null,Date.now()+file.originalname)
    },
  });


  //upload parameter for multer
  const upload=multer({
    storage:storage,
    limits:{
      fieldSize:1024*1024*3,
    },
  });
  // Create a new blog
  router.post("/",upload.single('blogImage'), blog.create);
  // Retrieve all blog
  router.get("/", blog.findAll);
  // Retrieve a single blog with id
  router.get("/:id", blog.findOne);
  // Update a blog with id
  router.put("/:id", blog.update);
  // Delete a blog with id
  router.delete("/:id", blog.delete);
  // Delete all blog
  router.delete("/", blog.deleteAll);
  
  app.use('/api/blogs', router);
};
